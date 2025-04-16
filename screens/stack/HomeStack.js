import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../Home";
import Kitab from "../Kitab";
import { DetailKitab } from "../DetailKitab";
import MoreKitab from "../MoreKitab";


const Stack = createNativeStackNavigator(); 

export default HomeStack = (() => { 
    return (
        <Stack.Navigator
        screenOptions={{headerShown : false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Kitab" component={Kitab} />
            <Stack.Screen name="Detail" component={DetailKitab} /> 
            <Stack.Screen name="More Kitab" component={MoreKitab}/>
        </Stack.Navigator>
    );
})