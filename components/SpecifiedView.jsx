import { Platform, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "../assets/color/Color";
import { StatusBar } from "expo-status-bar";

export const SpecifiedView = ({ children, style }) => {
    return Platform.OS === 'ios' ? (
        <SafeAreaView edges={['top', 'left', 'right']} style={[{ flex: 1, }, style]}>
            {children}</SafeAreaView>
    ) : (
        <SafeAreaView edges={['top', 'left', 'right', ]} style={[{ flex: 1, }, style]}> 
        <StatusBar backgroundColor={Color.white300}/>
        {children}</SafeAreaView>
    )
}