import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect } from "react";
import { BackHandler, FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { functionBack, functionLog } from "../helpers/functionHelper";
import { useFetchBook } from "../customeHooks/useFetchBook";
import { SafeAreaView } from "react-native-safe-area-context";

export default Kitab = ({ navigation }) => {
  const [{ books }] = useFetchBook();
  functionLog("dari Kitab", `data books", ${books} `);

  useEffect(() => {
    functionBack(navigation, "Home");
  }, [navigation]);

  const renderBookItem = ({item}) => (
    <View className="m-1 rounded overflow-hidden bg-white ">
        <TouchableOpacity className="m-4">
            <Text>{item.id}. {item.judul_arab}</Text>
            <Text>{item.id}. {item.judul_indonesia}</Text>
        </TouchableOpacity>
    </View>
  )
  return (
  <SafeAreaView className="flex-1">

    <ScrollView className="bg-slate-300">  
            <FlatList 
            data={books.syamail_muhammadiyah}
            renderItem={renderBookItem}
            /> 
    </ScrollView>
  </SafeAreaView>
  );
};
