import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect } from "react"
import { BackHandler, Text } from "react-native"
import { functionBack } from "../helpers/functionHelper";


export default Kitab = ({navigation})=> {
    useEffect(()=> {
        functionBack(navigation, 'Home')        
    }, [navigation])

    

return(
    
    <Text>ini Kitab</Text>
)
}