import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import Text from "../components/Text";

import { functionBack, functionLog } from "../helpers/functionHelper";
import { useFetchBook } from "../customeHooks/useFetchBook";
import { SpecifiedView } from "../components/SpecifiedView";
import { Loader } from "../components/Loader";
import {
  JSON_FORMAT,
  ORIGIN,
  urlFetchBook,
} from "../store/actions/actionCreator";
import { DialogPopUp } from "../components/DialogPopUp";
import Modal, {
  ModalButton,
  ModalContent,
  ModalFooter,
} from "react-native-modals";
import { BOOK_SET } from "../store/actions/actionType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import errorHandler from "../helpers/errHandler"; 
import { useRoute } from "@react-navigation/native";
import { useFetchBooksId } from "../customeHooks/useFetchBooksId";
let dataBooksStorage = "";

export default Kitab = ({ navigation }) => {
  const route = useRoute();
  const table_name = route?.params;

  const [books, setBooks] = useState();
  const [booksStorage, setBooksStorage] = useState();
  const [visible, setVisible] = useState();
  const [messageModal, setMessageModal] = useState("OK");
  const [textContent, setTextContent] = useState(
    "Data Kitab kami simpan di cloud, untuk penggunaan pertama silakan download dahulu"
  );
  const [{ booksID, isLoadingBooksID, errorBooksID }] =
    useFetchBooksId(table_name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataBooksStorage = await AsyncStorage.getItem(table_name);

        if (dataBooksStorage == null) {
          setVisible(true);
        } else {
          const parsedData = JSON.parse(dataBooksStorage);
          setBooksStorage(parsedData);
          setVisible(false);
        }
      } catch (error) {
        functionLog("error", error);
      }
    };

    fetchData();
  }, []);

  const fetchBookAction = async () => {
    try {
      const response = await fetch(`${ORIGIN}${table_name}${JSON_FORMAT}`);
      if (!response.ok) {
        throw errorHandler(response);
      }

      const responseJSON = await response.json();

      const stringifiedData = JSON.stringify(responseJSON[table_name]);
      console.log(
        "Ukuran data yang akan disimpan:",
        (stringifiedData.length / 1024).toFixed(2),
        "KB"
      );

      setBooksStorage(stringifiedData);
      await AsyncStorage.setItem(table_name, stringifiedData);

      dataBooksStorage = await AsyncStorage.getItem(table_name);
      dataBooksStorage = JSON.parse(dataBooksStorage);
      setBooksStorage(dataBooksStorage);

      setMessageModal("Done");
      setTextContent("Data Berhasil Di unduh..");
    } catch (err) {
      setMessageModal("Error..!");
      if (err.message == "database or disk is full (code 13 SQLITE_FULL)") {
        setTextContent(`${err.message} data tidak tersimpan dihpmu`);
        setBooksStorage;
      } else {
        console.log(
          "Full error message:",
          JSON.stringify(err.message, null, 2)
        );

        setTextContent(
          "Data Kitab kami simpan di cloud, untuk penggunaan pertama silakan download dahulu, Silahkan Cek Jaringan Anda"
        );
      }

      errorHandler(err);
      functionLog("error dari fetchBookAction", err);
    }
  };

  const moodalFooter = () => {
    return (
      <ModalFooter>
        <ModalButton
          text={messageModal}
          onPress={() => {
            if (messageModal == "Done") {
              setVisible(false);
              setBooksStorage(dataBooksStorage);
            } else if (messageModal == "Error..!") {
              setBooksStorage(booksID[table_name]);
              setVisible(false);
            } else {
              functionLog("masuk else messageModal", messageModal);
              fetchBookAction();
            }
          }}
        />
      </ModalFooter>
    );
  };

  const renderBookItem = ({ item }) => {
    return (
      <View className="m-1 rounded overflow-hidden">
        <TouchableOpacity
          className="m-4 bg"
          onPress={() => {
            handleClickDetail(item.id);
            setVisible(false);
          }}
        >
          <Text> {item.judul_arab} </Text>
          <Text>
            {item.id}. {item.judul_indonesia}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleClickDetail = async (id) => {
    // console.log("ini books " + books.syamail_muhammadiyah)
    try {
      const filter = booksStorage.find((x) => x.id === id);
      // console.error("ini klik id detail " + id);
      navigation.navigate("Detail", filter);
      await AsyncStorage.setItem("last", JSON.stringify(filter));
    } catch (error) {
      alert("Terjadi Kesalahan");
    }
  };

  return ( 
      <SpecifiedView className="flex-1">
        {visible ? (
          <View>
            <Modal
              visible={visible}
              onTouchOutside={() => navigation.navigate("Home")}
              footer={moodalFooter()}
            >
              <ModalContent>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    borderBottomWidth: 1,
                    paddingBottom: 6,
                    borderBottomColor: "#D1D1D1",
                  }}
                >
                  <Text className=" text-slate-600"> Alert </Text>
                </View>
                <View className="mt-2 justify-center items-center">
                  <Text className="text-center text-slate-600">
                    {textContent}
                  </Text>
                </View>
              </ModalContent>
            </Modal>
          </View>
        ) : (
          <View>
            <FlatList data={booksStorage} renderItem={renderBookItem} />
          </View>
        )}
      </SpecifiedView> 
  );
};
