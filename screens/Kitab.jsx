 
import React, { useEffect, useState } from "react";
import {   BackHandler, FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { functionBack, functionLog } from "../helpers/functionHelper";
import { useFetchBook } from "../customeHooks/useFetchBook"; 
import { SpecifiedView } from "../components/SpecifiedView";

export default Kitab = ({ navigation }) => {
  const [{ books }] = useFetchBook();
  functionLog("dari Kitab", `data books", ${books} `);

functionBack(navigation)

  const renderBookItem = ({item}) => (
    <View className="m-1 rounded overflow-hidden bg-white ">
        <TouchableOpacity className="m-4">
            <Text>{item.id}. {item.judul_arab}</Text>
            <Text>{item.id}. {item.judul_indonesia}</Text>
        </TouchableOpacity>
    </View>
  )
  return (
  <SpecifiedView className="flex-1">
            <FlatList 
            data={books.syamail_muhammadiyah}
            renderItem={renderBookItem}
            />  
  </SpecifiedView>
  );
};
