import { Platform, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "../assets/color/Color";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTheme } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const SpecifiedView = ({ children, style }) => {
  const { colors } = useTheme();
  return Platform.OS === "ios" ? ( 
      
        <View
          style={[
            { flex: 1, backgroundColor: colors.background, marginTop: 16 , zIndex : 2, },
            style,
          ]}
        >
          {children}
        </View>
      
  ) : ( 
     
        <View
          style={[
            { flex: 1, backgroundColor: colors.background, marginTop: 46 , marginBottom : 80 , zIndex : 2 },
            style,
          ]}
        >
          {children}
        </View>
  );
};
 