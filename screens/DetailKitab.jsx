import { Button, ScrollView, Text, View } from "react-native";
import HTML from "react-native-render-html";
import { functionLog } from "../helpers/functionHelper";
import { SpecifiedView } from "../components/SpecifiedView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import errorHandler from "../helpers/errHandler";
export const DetailKitab = ({ route }) => {
  let objData = route;

  functionLog("data detail kitab", objData?.params);

  const handleFavorite = async (data) => {

    try {
      let dataFav = await AsyncStorage.getItem("favorite")
      .then((res) => JSON.parse(res || '[]'))
        .catch(errorHandler);
      functionLog("data favorite " , dataFav)
      const favArray = dataFav !== null ? JSON.parse(favArray) : [];
      functionLog("data favArray " , favArray)
      // let favThis = await AsyncStorage.setItem("favorite", JSON.stringify(data))
      // functionLog("data favArray " , favThis) 
    } catch (error) {
      errorHandler(error)
    }

  }
  return (
    <SpecifiedView>
      <View>
        <View>
          <Button
            title="favorite"
            onPress={() => {
              handleFavorite(objData.params)
            }}
          />
        </View>
        <ScrollView>
          <View>
            <Text>
              {objData.params?.id}. {objData.params?.judul_indonesia}
            </Text>
          </View>
          <View>
            <HTML source={{ html: objData.params?.isi_arab }} />
          </View>
        </ScrollView>
      </View>
    </SpecifiedView>
  );
};
