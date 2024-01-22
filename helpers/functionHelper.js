import { BackHandler } from "react-native";


export const functionBack = (navigation, navigateTo)=>{
    const backHandler = BackHandler.addEventListener('hardwareBackPress', 
        ()=> {
            navigation.replace(navigateTo);
            return true;
        }
        )
        return () => backHandler.remove();
}