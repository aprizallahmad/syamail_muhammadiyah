import { Button, ScrollView, View } from "react-native";
import RenderHtml from "react-native-render-html"; RenderHtml
import HTML from "react-native-render-html";
import { functionLog } from "../helpers/functionHelper";
import { SpecifiedView } from "../components/SpecifiedView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import errorHandler from "../helpers/errHandler";
import Text from "../components/Text"
import { styles } from "../assets/css/Style";
import { useWindowDimensions } from 'react-native';

export const DetailKitab = ({ route }) => {
  let objData = route;
  const { width } = useWindowDimensions();
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

  const tagsStyles = {
    h1: { fontSize: 24, fontWeight: 'bold', color: '#2c3e50', },
    h2: { fontSize: 20, fontWeight: 'bold', marginVertical: 10, color: '#34495e', textAlign: 'center', },
    p: { fontSize: 16, lineHeight: 24, color: '#333', textAlign: 'justify' },
    em: { fontStyle: 'italic', color: '#006699' },
    strong: { fontWeight: 'bold' },
  };

  return (

    <SpecifiedView className="flex-1">
      <ScrollView className="flex-1">
        <View style={[styles.containerDefault, { marginHorizontal: 8 }]}>
          <View className='mb-4'>
            <Button
              title="favorite"
              onPress={() => {
                handleFavorite(objData.params)
              }}
            />
          </View>
          <View className='bg-neutral-900  p-4 '
            style={styles.containerDefault} >
            <Text className='text-center text-white'>
              {objData.params?.judul_arab}
            </Text>
          </View>
          <View className='  p-4 '
          style={styles.containerDefault} >
            <Text className='text-center  '>
              {objData.params?.id}. {objData.params?.judul_indonesia}
            </Text>
          </View>
          <View>
            <RenderHtml
              source={{ html: objData.params?.isi_arab }}
              contentWidth={width}
              tagsStyles={tagsStyles}
            />
          </View>
        </View>
      </ScrollView>
    </SpecifiedView>
  );
}; 