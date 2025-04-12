import { ScrollView, View } from "react-native";
import HTML from "react-native-render-html";
import { functionLog } from "../helpers/functionHelper";
import { SpecifiedView } from "../components/SpecifiedView";
import Text from "../components/Text"

export const LastDetail = ({ route }) => {
  let objData = JSON.parse(route.params);
  return (
    <SpecifiedView className="">
      <ScrollView>
        <View>
          <Text>
            {objData?.id}. {objData?.judul_indonesia}
          </Text>
        </View>
        <View>
          <HTML source={{ html: objData?.isi_arab }} />
        </View>
      </ScrollView>
    </SpecifiedView>
  );
};
