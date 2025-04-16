import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import TabArr, { StackArr } from "./data/DataTabBottomNav";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Animatable from "react-native-animatable";
import Icon from "./components/Icons";
import Color from "./assets/color/Color";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./assets/css/Style";
import Kitab from "./screens/Kitab";
import ScreenView from "./components/ScreenView";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default Index = () => {
  const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);

    useEffect(() => {
      if (focused) {
        viewRef.current.animate({
          0: { scale: 0.5, rotate: "0deg" },
          1: { scale: 1.5, rotate: "360deg" },
        });
      } else {
        viewRef.current.animate({
          0: { scale: 1.5, rotate: "360deg" },
          1: { scale: 1, rotate: "0deg" },
        });
      }
    }, [focused]);

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={[styles.containerIndex, { top: 0 }]}
      >
        <Animatable.View ref={viewRef} duration={1000}>
          <Icon
            type={item.type}
            name={focused ? item.activeIcon : item.inActiveIcon}
            color={focused ? Color.red : Color.primary}
          />
        </Animatable.View>
      </TouchableOpacity>
    );
  };

  return (
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                height: 60,
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
              },
            }}
          >
            {TabArr.map((item, index) => {
              return (
                <Tab.Screen
                  key={index}
                  name={item.route}
                  component={item.component}
                  options={{
                    tabBarShowLabel: false,
                    tabBarButton: (props) => (
                      <TabButton {...props} item={item} />
                    ),
                  }}
                />
              );
            })}
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
  );
};
