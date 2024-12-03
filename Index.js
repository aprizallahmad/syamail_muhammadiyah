import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Kitab from "./screens/Kitab";
import Home from "./screens/Home";
import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { DetailKitab } from "./screens/DetailKitab";
import Color from "./assets/color/Color";
import { handleSearch } from "./helpers/functionHelper";
import { useState } from "react";
import { Favorite } from "./screens/Favorite";
import { LastDetail } from "./screens/LastDetail";
const Stack = createNativeStackNavigator();


export default Index = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar style="auto" backgroundColor={Color.status_bar} /> */}
      <Stack.Navigator>
        <Stack.Screen
          options={{ 
            title: "Home",
            animation: "slide_from_left",
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            //  headerLeft: Kitab,
            animation: "slide_from_left",
            headerStyle : {
              backgroundColor  :"#fff", 
            }
          }}
          
          name="Kitab"
          component={Kitab}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            //  headerLeft: Kitab,
            animation: "slide_from_left",
          }}
          name="Detail"
          component={DetailKitab}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            //  headerLeft: Kitab,
            animation: "slide_from_left",
          }}
          name="LastDetail"
          component={LastDetail}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            //  headerLeft: Kitab,
            animation: "slide_from_left",
          }}
          name="Favorite"
          component={Favorite}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
