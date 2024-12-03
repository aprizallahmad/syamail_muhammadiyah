import { Image, View } from "react-native"


export const Loader = () => {

    return(
        <View className="m-1 rounded overflow-hidden items-center bg-white"
        //  style= {{ flex: 1,
        //     maxWidth: "50%", // 100% devided by the number of rows you want
        //     alignItems: "center",
        
        //     // my visual styles; not important for the grid
        //     padding: 20,
        //     borderWidth: 1.5,
        //     borderRadius: 10,
        //     borderColor: "#F0F0F0",}}
            >
            <Image
            source={require("../assets/ic_loading_animation.gif")} className="scale-50" 
            />
        </View>
    )
}