import { Button, ScrollView, View } from "react-native";
import HTML from "react-native-render-html";
import { functionLog } from "../helpers/functionHelper";
import { SpecifiedView } from "../components/SpecifiedView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import errorHandler from "../helpers/errHandler";
import Text from "../components/Text" 
import { styles } from "../assets/css/Style";


export const DetailKitab = ({ route }) => {
  let objData = route;

  functionLog("data detail kitab", objData?.params);

  const handleFavorite = async (data) => {
    try {
      const result = await AsyncStorage.getItem("favorite");
      functionLog("data favorite result", result);

      const dataFav = result ? JSON.parse(result) : [];
      functionLog("data favorite", dataFav);

      // Lanjutkan logic kamu di sini, misalnya update favorite:
      // dataFav.push(data); atau filter, dsb.

    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <SpecifiedView className="flex-1">
      <View style={[styles.containerDefault, {marginHorizontal : 8}]}> 
        <View>
          <Button
            title="favorite"
            onPress={() => {
              handleFavorite(objData.params)
            }}
          />
        </View>
        <View>
          <Text>
            {objData.params?.id}. {objData.params?.judul_indonesia}
          </Text>
        </View>
        <View>
          <HTML source={{ html: objData.params?.isi_arab }} />
        </View>
      </View> 
    </SpecifiedView>
  );
}; 