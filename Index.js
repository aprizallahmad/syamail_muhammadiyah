import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import TabArr, { StackArr } from "./data/DataTabBottomNav";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Animatable from "react-native-animatable";
import Icon from "./components/Icons";
import Color from "./assets/color/Color";
import { styles } from "./assets/css/Style";
import Kitab from "./screens/Kitab"; 
import { SpecifiedView } from "./components/SpecifiedView";

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
        style={[styles.containerIndex]}
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
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']} >
        <StatusBar backgroundColor={Color.white}/>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0, 
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              height: 60,
              elevation: 10, // Android shadow 
              shadowOffset: { width: 0, height: -3 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
            },
            safeAreaInsets: { bottom: 0 },
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
