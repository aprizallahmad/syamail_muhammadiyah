import { BackHandler } from "react-native";


export const functionBack = (navigation, navigateTo)=>{
    // const backHandler = BackHandler.addEventListener('hardwareBackPress', 
    //     // ()=> {
    //         // navigation.navigate(navigateTo);
    //         navigation.goBack
    //         // return true;
    //     // }
    //     )
    //     return () => backHandler.remove();
    BackHandler.addEventListener('hardwareBackPress', () => {
        if(navigateTo=="home"){
            BackHandler.exitApp()
        }
        navigation.goBack();
      return true;
    })
    return()=> BackHandler.removeEventListener()

}

export const functionLog = (message , data) => { 
    return console.log(  data +  ">>>>>>>>>>>>>> functionLog " +message+ " <<<<<<<<<<<<<<"  )
}
