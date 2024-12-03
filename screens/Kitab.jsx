import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  Button,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { functionBack, functionLog } from "../helpers/functionHelper";
import { useFetchBook } from "../customeHooks/useFetchBook";
import { SpecifiedView } from "../components/SpecifiedView";
import { Loader } from "../components/Loader";
import { urlFetchBook } from "../store/actions/actionCreator";
import { DialogPopUp } from "../components/DialogPopUp";
import Modal, {
  ModalButton,
  ModalContent,
  ModalFooter,
} from "react-native-modals";
import { BOOK_SET } from "../store/actions/actionType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import errorHandler from "../helpers/errHandler";
let dataBooksStorage = "";

export default Kitab = ({ navigation }) => {
  const [books, setBooks] = useState();
  const [booksStorage, setBooksStorage] = useState();
  const [visible, setVisible] = useState();
  const [messageModal, setMessageModal] = useState("OK");
  const [textContent, setTextContent] = useState("Data Kitab kami simpan di cloud, untuk penggunaan pertama silakan download dahulu")
  const dataReady = navigation.dispatch((state) => {
    functionLog("======================", state.dataReady);
    return state.params ? true : false;
  });
  functionLog("ini data book storage", booksStorage?.length);
  functionLog("dataReady = navigation", dataReady);

  useEffect(async () => {
    try {
      functionLog("++++++++++++++++++++ 2 ", "");
      dataBooksStorage = await AsyncStorage.getItem("books");

      functionLog("++++++++++++++++++++ 3 ", dataBooksStorage);
      if (dataBooksStorage == null) {
        functionLog("++++++++++++++++++++ 4 ", dataBooksStorage);
        setVisible(true);
      } else {
        functionLog("++++++++++++++++++++ 5 ", dataBooksStorage); 
        dataBooksStorage = JSON.parse(dataBooksStorage);
        setBooksStorage(dataBooksStorage);
        setVisible(false);
      }
    } catch (error) {}
  }, []);

  const fetchBookAction = async () => {
    try {
      const response = await fetch(urlFetchBook);
      if (!response.ok) {
        throw errorHandler(response);
      }

      const responseJSON = await response.json();
      // functionLog("fetchBookAction responseJSON", responseJSON);
      setBooks(responseJSON);
      await AsyncStorage.setItem(
        "books",
        JSON.stringify(responseJSON?.syamail_muhammadiyah)
      );
      dataBooksStorage = await AsyncStorage.getItem("books");
      dataBooksStorage = JSON.parse(dataBooksStorage);
      // functionLog("databook storage", dataBooksStorage)
      setMessageModal("Done");
      setTextContent("Data Berhasil Di unduh..")
    } catch (err) {
      setMessageModal("Error..!");
      setTextContent("Data Kitab kami simpan di cloud, untuk penggunaan pertama silakan download dahulu, Silahkan Cek Jaringan Anda")
      
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
            } else {
              fetchBookAction();
            }
          }}
        />
      </ModalFooter>
    );
  };

  const renderBookItem = ({ item }) => {
    return (
      <View className="m-1 rounded overflow-hidden bg-white ">
        <TouchableOpacity
          className="m-4 bg"
          onPress={() => {
            handleClickDetail(item.id);
            setVisible(false);
          }}
        >
          <Text>
            {item.id}. {item.judul_arab}
          </Text>
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
      console.error("ini klik id detail " + id);
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
                <Text> Alert </Text>
              </View>
              <View className="mt-2 justify-center items-center">
                <Text className="text-center">
                  {textContent}
                </Text>
              </View>
            </ModalContent>
          </Modal>
        </View>
      ) : (
        <View> 
          <FlatList
            data={booksStorage}
            renderItem={renderBookItem}
          />
        </View>
      )}
    </SpecifiedView>
  );
};
