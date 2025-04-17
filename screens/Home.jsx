import { useContext, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
  Animated,
} from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import Text from "../components/Text";

import { SafeAreaView } from "react-native-safe-area-context";
// import Carousel, { Pagination } from "react-native-snap-carousel";
import Carousel from "react-native-reanimated-carousel";
import { dataCarousel, itemData } from "../data/Data";
import { styles } from "../assets/css/Style";
import { functionBack, functionLog } from "../helpers/functionHelper";
import { useFetchStore } from "../customeHooks/useFetchStore";
import { useFetchListBooks } from "../customeHooks/useFetchListBooks";
import { SpecifiedView } from "../components/SpecifiedView";
import { Loader } from "../components/Loader";

import ArrowRight from "../assets/svg/ic_more.svg"; // ← Import SVG
import AsyncStorage from "@react-native-async-storage/async-storage"; 

import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import Color from "../assets/color/Color";
import { useFetchChannelYoutube } from "../customeHooks/useFetchChannelYoutube";

const TAG = "dari HOME";
const { width, height } = Dimensions.get("window");
functionLog("ini width handphonya", width);

export default Home = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [{ stores, isLoadingStore, error }] = useFetchStore();
  const [{ listBooks, isLoadingListBooks, errorListBooks }] =
    useFetchListBooks();

  const [{ channels, isLoadingChannel, errorChannel }] =
    useFetchChannelYoutube();

  let dataWithMore = [];

  if (isLoadingListBooks == false) {
    // functionLog(
    //   "dari home",
    //   ` response dari fetchStoreAction listBooks stringify >>>>>> ${JSON.stringify(
    //     listBooks["kitab-kuning"].slice(0, 1),
    //     null,
    //     2
    //   )}`
    // );
    dataWithMore = [
      ...listBooks["kitab-kuning"].slice(0, 3),
      { isMoreButton: true, nama_kitab_indonesia: "Kitab lainnya", id: "999" },
    ];
  }

  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => handleCarouselClick(item, index)}>
        <View style={styless.shadowWrapper} >
          <ImageBackground
            source={item.image}
            style={styless.imageBackground}
            resizeMode="cover" // atau "stretch" / "contain", tergantung kebutuhan
          >
            <Image
              source={item.image}
              style={styless.image}
              resizeMode="cover"
            />
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  const ItemGridMenu = ({ item, index }) => {
    return (
      // <View style={styles.item}>
      <View
        className="m-1 rounded overflow-hidden "
        style={{
          height: height * 0.25,
          width: width * 0.3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => handleMenuItemClick(item, index)}
          style={{
            width: width * 0.3,
            height: width * 0.3,
            // backgroundColor: isLainnya ? Color.white : Color.red,
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.nama_kitab_indonesia === "Kitab lainnya" ? (
            <ArrowRight
              width={width * 0.3}
              height={width * 0.3}
              backgroundColor={Color.white}
              style={{
                height: width * 0.3,
                width: width * 0.3,
              }}
            />
          ) : (
            <Image
              source={{ uri: item.url_gambar_kitab }}
              style={{ height: width * 0.3, width: width * 0.3 }}
            />
          )}
          <Text className="  font-medium text-center ">
            {item.nama_kitab_indonesia}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderChannels = ({ item, index }) => {
    return (
      // <View style={styles.item}>
      <View
        className="m-1 rounded overflow-hidden "
        style={{
          height: height * 0.25,
          width: width * 0.3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => handleMenuItemClick(item, index)}
          style={{
            width: width * 0.3,
            height: width * 0.3,
            // backgroundColor: isLainnya ? Color.white : Color.red,
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: item.logo_toko }}
            style={{ height: width * 0.3, width: width * 0.3 }}
          />

          <Text className="  font-medium text-center ">{item.nama_toko}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleMenuItemClick = async (item, index) => {
    functionLog(TAG, `Clicked item:  ${item.id}, "at index:", ${index}`);
    switch (item.id) {
      case "999":
        navigation.navigate("More Kitab");
        break;
      default:
        navigation.navigate("Kitab", item.nama_tabel_kitab);
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
      <SpecifiedView className="" style={{  paddingHorizontal: 16, marginTop: 16, }}>
        <View style={styles.containerDefault}>
          <Text>Assalaamu'alaikum </Text>
        </View>

        <View style = {styles.containerDefault} > 
        </View> 
        <View style={styles.containerDefault}>
          <Carousel
            loop={true}
            width={width - 45}
            height={250}
            autoPlay={true}
            data={dataCarousel}
            scrollAnimationDuration={3000}
            onSnapToItem={setActiveIndex}
            renderItem={_renderItem}
            mode="parallax"
            modeConfig={{ parallaxScrollingOffset: 20 }}
            panGestureHandlerProps={{
              activeOffsetX: [-10, 10],
            }}
          />
          <View className="" style={styles.pagination}>
            {dataCarousel.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === activeIndex ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>
        <View style={styles.containerDefault}>
          <Text className="">Menu Kitab Kuning</Text>
          <View className="flex flex-row flex-wrap">
            <FlatList
              data={dataWithMore}
              horizontal={true}
              renderItem={ItemGridMenu}
              keyExtractor={(kitabKuning, index) =>
                `${kitabKuning.id}-${index}`
              }
            />
          </View>
        </View>
        <View style={styles.containerDefault}>
          <Text className="ml-3">List Channel Youtube</Text>
          <View className="flex flex-row flex-wrap">
            <FlatList
              data={channels.ChannelYoutube}
              horizontal={true}
              renderItem={renderChannels}
              keyExtractor={(channels, index) => `${channels.id_toko}-${index}`}
            />
          </View>
        </View>
        <View className="bg-[#1eb019] h-8 justify-center">
          <Text> Belilah Buku Aslinya di Mitra Toko Kitab Kuning</Text>
        </View>
        <View className="flex flex-row flex-wrap">
          <FlatList
            data={stores.toko_mitra}
            horizontal={true}
            renderItem={renderStoreItem}
            keyExtractor={(toko_mitra, index) =>
              `${toko_mitra.id_toko}-${index}`
            }
          />
        </View>
        <View className="bg-[#1eb019] h-8 justify-center mb-20">
          <Text> Ngaji Kitab Syamail Muhammadiyah</Text>
        </View>
      </SpecifiedView> 
  );
};


const styless = StyleSheet.create({
  shadowWrapper: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    backgroundColor: '#fff', // penting untuk iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // Android shadow
    marginBottom: 8,
  },
  imageBackground: {
    flex: 1,
    borderRadius: 8,
    width: '100%',
    height: '100%',
    overflow: 'hidden', // biar radius-nya jalan
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  carousel: {
    marginBottom: 5,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
    boxShadow: '0px 0px 14px 1px rgba(140, 140, 140, 0.20)',
    paddingVertical: 8,
  }

});