import { Platform, SafeAreaView as IosSafeAre } from "react-native";
import { SafeAreaView as AndroidSafeArea } from "react-native-safe-area-context";

export const SpecifiedView = ({children , style})=> {
    return Platform.OS === 'ios' ? (
        <IosSafeAre style={style}>{children}</IosSafeAre>
    ) : (
        <AndroidSafeArea className="mt-[-35]" style={style}>{children}</AndroidSafeArea>
    )
}