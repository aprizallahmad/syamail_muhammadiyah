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
  useWindowDimensions
} from "react-native";
import Text from "../components/Text";

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

import Color from "../assets/color/Color";
import { useFetchChannelYoutube } from "../customeHooks/useFetchChannelYoutube";

const TAG = "dari HOME";
const { width, height } = Dimensions.get("window");
functionLog("ini width handphonya", width);

export default Home = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  functionLog("ini width handphonya", width);
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
        <View style={styless.shadowWrapper}>
          <ImageBackground
            source={item.image}
            style={styless.imageBackground}
            resizeMode="cover" // atau "stretch" / "contain", tergantung kebutuhan
          >
            <Image
              source={item.image}
              style={styless.image}
              resizeMode="contain"
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
          style={[
            styless.imageBackground,
            {
              width: width * 0.3,
              height: width * 0.3,
              // backgroundColor: isLainnya ? Color.white : Color.red,
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          {item.nama_kitab_indonesia === "Kitab lainnya" ? (
            <ArrowRight
              width="30%"
              height={width * 0.34}
              backgroundColor={Color.white}
              style={{
                height: width * 0.3,
                width: width * 0.3,
              }}
            />
          ) : (
            <Image
              source={{ uri: item.url_gambar_kitab }}
              style={[styless.image]}
            />
          )}
        </TouchableOpacity>
        <Text className="font-medium text-center h-12">
          {item.nama_kitab_indonesia}
        </Text>
      </View>
    );
  };

  const renderStoreItem = ({ item }) => (
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
        style={[
          styless.imageBackground,
          {
            width: width * 0.3,
            height: width * 0.3,
            // backgroundColor: isLainnya ? Color.white : Color.red,
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
        onPress={() => handleStoreClick(item)}
      >
        <Image
          source={{ uri: item.logo_toko }}
          style={[styless.image]}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text className="  font-medium text-center h-12">{item.nama_toko}</Text>
    </View>
  );

  const renderChannels = ({ item, index }) => {
    return (
      // <View style={styles.item}>
      <View
        className="m-1 rounded overflow-hidden "
        style={[  {
          height: height * 0.25,
          width: width * 0.6,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          marginBottom: "5%",
        }]}
      >
        <TouchableOpacity
          onPress={() => handleStoreClick(item, index)}
          style={[
            styless.imageBackground,
            {
              width: "100%",
              height: width * 0.3,
              borderRadius: 12,
              justifyContent: "center",
            },
          ]}
        >
          <Image
            source={{ uri: item.logo_toko }}
            style={[styless.image]}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text className="  font-medium text-center h-12">{item.nama_toko}</Text>
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

  return (
    <ScrollView style={{ flex: 1 }}>
      {/* Sticky Header */}
      <View style={{ zIndex: 1, paddingTop: 38, paddingHorizontal: 16, marginBottom : 4 }}>
        <Text className="">Assalaamu'alaikum </Text>
      </View>

      {/* Scrollable content */}
      <SpecifiedView
        className=""
        style={{ paddingHorizontal: 16, marginTop: 6 }}
      >
        {/* <View style={styles.containerDefault}>
          <View className="flex-row gap-1 flex-wrap">
            <View
              style={{ width: "40%", flex: 1 }}
            >
              <Text>Jum'at, 20 syawal, 1446 H</Text>
              <View className="flex-row gap-2">
                <View className="flex-col gap-1">
                  <Text>Subuh</Text>
                  <Text>04:37</Text>
                </View>
                <View className="flex-col gap-1">
                  <Text>Terbit</Text>
                  <Text>05:52</Text>
                </View>
                <View className="flex-col gap-1">
                  <Text>Lohor</Text>
                  <Text>11:55</Text>
                </View>
              </View>
              <Text>Bekasi, Jati Asih</Text>
            </View>
            <View className="flex-1 p-3 justify-center items-center">
              <Image
                style={{
                  width : '100%', 
                  height: 80,
                }}
                source={require("../assets/png/logo_dht_1.png")}
                resizeMode="contain"
              />
            </View>
          </View>
        </View> */}
        <View style={styless.carousel}>
          <Carousel
            loop={true}
            width={width - 32}
            height={200}
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
              nestedScrollEnabled={true}
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
              nestedScrollEnabled={true}
              renderItem={renderChannels}
              keyExtractor={(channels, index) => `${channels.id_toko}-${index}`}
            />
          </View>
        </View>
        <View style={styles.containerDefault}>
          <Text> Belilah Buku Aslinya di Mitra Toko Kitab Kuning</Text>
          <View className="flex flex-row flex-wrap">
            <FlatList
              data={stores.toko_mitra}
              horizontal={true}
              renderItem={renderStoreItem}
              nestedScrollEnabled={true}
              keyExtractor={(toko_mitra, index) =>
                `${toko_mitra.id_toko}-${index}`
              }
            />
          </View>
        </View>
      </SpecifiedView>
    </ScrollView>
  );
};

const styless = StyleSheet.create({
  shadowWrapper: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    backgroundColor: "#fff", // penting untuk iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // Android shadow
  },
  imageBackground: {
    flex: 1,
    borderRadius: 8,
    width: "100%",
    height: "100%",
    overflow: "hidden", // biar radius-nya jalan
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  carousel: {
    boxShadow: "0px 0px 14px 1px rgba(140, 140, 140, 0.20)",
    borderRadius: 16,
    marginBottom: 5,
  },
});
