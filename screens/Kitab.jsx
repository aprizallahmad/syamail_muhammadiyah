import React, { useEffect, useLayoutEffect, useState } from "react";
import {
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

export default Kitab = ({ navigation }) => {
  const [{ books }] = useFetchBook();
  const [filterText, setFilterText] = useState([]);
  const [detail, setDetail] = useState(null);


  functionBack(navigation);

  const renderBookItem = ({ item }) => (
    <View className="m-1 rounded overflow-hidden bg-white ">
      <TouchableOpacity
        className="m-4 bg"
        onPress={() => handleClickDetail(item.id)}
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

  useEffect(() => {
    // handleClickDetail()
  }, []);

  const handleClickDetail = (id) => {
    // console.log("ini books " + books.syamail_muhammadiyah)
    const filter = books.syamail_muhammadiyah.find((x) => x.id === id);
    const data = JSON.stringify(filter);
    setDetail(JSON.parse(data));
    console.error("ini klik id detail " + id);
    
    
    if (detail != null) {
      if (detail.id != null) {
        console.error("ini detail " + detail.id);
        console.error("ini detail setelah di set()" + detail.id);
        if (id == detail.id) {
          navigation.navigate("Detail", detail);
        }
      }
    }
  };

  return (
    <SpecifiedView className="flex-1">
      <FlatList data={books.syamail_muhammadiyah} renderItem={renderBookItem} />
    </SpecifiedView>
  );
};
