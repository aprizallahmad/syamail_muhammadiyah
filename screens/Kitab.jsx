import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import Text from "../components/Text";
import { Icons } from "../components/Icons";
import { functionLog } from "../helpers/functionHelper";
import { useFetchBook } from "../customeHooks/useFetchBook";
import { SpecifiedView } from "../components/SpecifiedView";
import { Loader } from "../components/Loader";
import {
  JSON_FORMAT,
  ORIGIN,
  urlFetchBook,
} from "../store/actions/actionCreator";
import Modal from 'react-native-modal';

import { BOOK_SET } from "../store/actions/actionType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import errorHandler from "../helpers/errHandler";
import { useRoute } from "@react-navigation/native";
import { useFetchBooksId } from "../customeHooks/useFetchBooksId";
import { styles } from "../assets/css/Style";
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
      const books = responseJSON[table_name];
      let bookKey = ''
      const storagePromises = books.map(async (book) => {
        bookKey = `${table_name}${book.id}`
        await AsyncStorage.setItem(bookKey, JSON.stringify(book))
      })
      functionLog("fetchBookAction", `bookKey ${bookKey}`);
      functionLog("fetchBookAction", `responseJSON ${responseJSON}`);

      await Promise.all(storagePromises)

      console.log(
        "Ukuran data yang akan disimpan:",
        (storagePromises.length / 1024).toFixed(2),
        "KB"
      );

      setBooksStorage(books);
      dataBooksStorage = await AsyncStorage.getItem(bookKey);
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
  const handlePress = () => {
    functionLog("masuk else messageModal", messageModal);
    if (messageModal === "Done") {
      setVisible(false);
      setBooksStorage(dataBooksStorage);
    } else if (messageModal === "Error..!") {
      setBooksStorage(booksID[table_name]);
      setVisible(false);
    } else {
      functionLog("masuk else messageModal", messageModal);
      fetchBookAction();
    }
  };

  const renderBookItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        handleClickDetail(item.id);
        setVisible(false);
      }}
        className="m-1 rounded overflow-hidden mx-4" style={styles.containerDefault}>
        <View className="m-4 bg" >
          <Text> {item.judul_arab} </Text>
          <Text>
            {item.id}. {item.judul_indonesia}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleClickDetail = async (id) => {
    // console.log("ini books " + books.syamail_muhammadiyah)
    try {
      const filter = booksStorage.find((x) => x.id === id);
      const pages = booksStorage.length;
      let lastBookId = null;
      if (pages > 0) {
        // Access the last element (index: length - 1)
        lastBookId = booksStorage[pages - 1].id;
      }
      // console.error("lastBookId " + lastBookId);

      navigation.navigate("Detail", {
        bookDetails: filter,
        lastBookId
      });
      await AsyncStorage.setItem("LAST", JSON.stringify(filter));
    } catch (error) {
      alert(`Terjadi Kesalahan ${error}`);
    }
  };

  return (
    <SpecifiedView className="flex-1">
      {visible ? (
        <View>
          <Modal isVisible={visible}
            onTouchOutside={() => navigation.navigate("Home")}>
            <View style={styles.modalContent}>
              <View style={styles.header}>
                <Icons.Ionicons
                  name="information-circle-outline"
                  size={24}
                  color="#555"
                />
                <Text style={styles.title}>Download Data Kitab</Text>
              </View>
              <Text style={styles.message}>
                {textContent}
              </Text>
              <View style={styles.footer}>
                <TouchableOpacity onPress={handlePress} >
                  <Text style={styles.confirmText}>YA</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      ) : (
        <View className="mb-14">
          <FlatList data={booksStorage} renderItem={renderBookItem} />
        </View>
      )}
    </SpecifiedView>
  );
};
