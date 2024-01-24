import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Kitab from "./screens/Kitab";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

export default Index = () => {
  return (
   
      <NavigationContainer>
         <StatusBar style="auto" backgroundColor={"#FF0000"}/>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: true,
              title: "Syamail Muhammadiyah",
              animation: "slide_from_left",
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              //  headerLeft: Kitab, 
              title: "Syamail Muhammadiyah", 
              animation: "slide_from_left",
            }}
            name="Kitab"
            component={Kitab}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
};
