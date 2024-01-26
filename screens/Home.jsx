import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { dataCarousel, itemData, width } from "../data/Data";
import { styles } from "../assets/css/Style";
import { functionLog } from "../helpers/functionHelper";
import { useFetchStore } from "../customeHooks/useFetchStore";
import { SpecifiedView } from "../components/SpecifiedView";

const TAG = "dari HOME";
functionLog("ini width handphonya", width);

export default Home = ({ navigation }) => {
  const [activeDot, setActiveDot] = useState(0);
  const _carousel = useRef();
  const [{ stores }] = useFetchStore();
  functionLog("dari home", `  stores , ${stores} `);

  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => handleCarouselClick(item, index)}>
        <ImageBackground>
          <Image
            source={item.image}
            style={{ height: width * 0.5, width: width }}
            resizeMode={item.id == 4 ? "contain" : "center"}
          />
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const ItemGridMenu = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => handleMenuItemClick(item, index)}
        >
          {item.icon}
          {item.title_menu}
        </TouchableOpacity>
      </View>
    );
  };

  const handleMenuItemClick = (item, index) => {
    functionLog(
      TAG,
      `Clicked item:", ${item.id}, "at index:", ${index}`
    );

    switch (item.id) {
      case 1:
      case 2:
      case 3:
        navigation.navigate("Kitab");
        break;
      case 4:
        break;
      case 5:
        Linking.openURL(
          "https://play.google.com/store/apps/details?id=id.kitabkuning.syamail.muhammadiyah.v2"
        );
        break;
      default:
        // Handle case where item.id is not matched with any cases above
        break;
    }
  };

  const handleCarouselClick = (item, index) => {
    functionLog(
      "dari home",
      `Clicked handleCarouselClick:", ${item}, "at index:", ${index}`
    );
    // ... your click actions here
    const url = item.url;
    Linking.openURL(url);
  };

  const handleStoreClick = (item, index) => {
    functionLog(
      "dari home",
      `Clicked handleStoreClick:", ${item}, "at index:", ${index}`
    );
    // ... your click actions here
    const url = item.link_toko;
    Linking.openURL(url);
  };

  const renderStoreItem = ({ item }) => (
    <View
      className="m-1 rounded overflow-hidden  items-center "
      style={{ height: width * 0.4, width: width * 0.35 }}
    >
      <TouchableOpacity onPress={() => handleStoreClick(item)}>
        <Image
          source={{ uri: item.logo_toko }}
          style={{ height: width * 0.3, width: width * 0.3 }}
          resizeMode="contain"
        />
        <Text className="  font-medium text-gray-700  text-center">
          {item.nama_toko}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SpecifiedView className="flex-1 bg-slate-100">
      {/* <StatusBar style="auto" backgroundColor={"#FF0000"} /> */}
      {/* <View className="bg-[#FF0000] h-8 justify-center">
        <Text> Syamail Muhammadiyah</Text>
      </View> */}
      <ScrollView>
        <Carousel
          //   autoplay={true}
          loop={true}
          data={dataCarousel}
          ref={_carousel}
          renderItem={_renderItem}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index) => setActiveDot(index)}
        />

        <View className=" justify-center">
          <Pagination
            activeDotIndex={activeDot}
            dotsLength={dataCarousel.length}
            dotStyle={{
              width: 10,
            }}
            containerStyle={{ marginTop: -60 }}
            inactiveDotOpacity={0.6}
            inactiveDotScale={0.8}
            carouselRef={_carousel}
          />
        </View>
        <View className="bg-[#FF0000] mt-[-10]">
          <Text className="ml-3">Menu Kitab Kuning</Text>
        </View>
        <View style={styles.app}>
          <FlatList
            data={itemData}
            numColumns={3}
            style={{ padding: 5 }}
            renderItem={ItemGridMenu}
            keyExtractor={(itemData) => itemData.alt}
            scrollEnabled={false}
          />
        </View>
        <View className="bg-[#1eb019] h-8 justify-center">
          <Text> Belilah Buku Aslinya di Mitra Toko Kitab Kuning</Text>
        </View>
        <View className="flex flex-row flex-wrap">
          <FlatList
            data={stores.toko_mitra}
            horizontal={true}
            renderItem={renderStoreItem}
            keyExtractor={(toko_mitra) => toko_mitra.id_toko}
          />
        </View>
        <View className="bg-[#1eb019] h-8 justify-center mb-20">
          <Text> Ngaji Kitab Syamail Muhammadiyah</Text>
        </View>
      </ScrollView>
    </SpecifiedView>
  );
};
