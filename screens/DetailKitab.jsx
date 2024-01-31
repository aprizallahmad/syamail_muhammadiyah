import { ScrollView, Text, View } from "react-native";
import HTML from "react-native-render-html";
import { functionLog } from "../helpers/functionHelper";
export const DetailKitab = ({ route }) => {
  let objData = route;

  functionLog("data detail kitab", objData?.params);
  return (
    <ScrollView>
      <View>
        <Text>{objData.params?.id}. {objData.params?.judul_indonesia}</Text>
      </View>
      <View>
        <HTML source={{ html: objData.params?.isi_arab }} />
      </View>
    </ScrollView>
  );
};
