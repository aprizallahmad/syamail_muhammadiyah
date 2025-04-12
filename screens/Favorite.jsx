import { FlatList, View } from "react-native"
import { SpecifiedView } from "../components/SpecifiedView"
import AsyncStorage from "@react-native-async-storage/async-storage" 
import Text from "../components/Text"


export const Favorite = ({route})=> {

     
const renderBookItem = ({ item }) => {
    return (
      <View className="m-1 rounded overflow-hidden bg-white ">
        <TouchableOpacity
          className="m-4 bg"
          onPress={() => {
            handleClickDetail(item.id);
            setVisible(false);
          }}
        >
          <Text>
            {item.id}. {item.judul_arab}
          </Text>
          <Text>
            {item.id}. {item.judul_indonesia}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
    return(
        <SpecifiedView>
            <View>
          <FlatList
            data={route.params}
            renderItem={renderBookItem}
          />
        </View>
        </SpecifiedView>
    )
}