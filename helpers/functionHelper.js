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

export const functionLog = (message , data) => { 
    return console.log(  data +  ">>>>>>>>>>>>>> functionLog " +message+ " <<<<<<<<<<<<<<"  )
}
