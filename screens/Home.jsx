import { StatusBar } from "expo-status-bar";
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
import { SECTIONS, data, itemData, width } from "../data/Data";
import { styles } from "../assets/css/Style";
import { useNavigation } from "@react-navigation/native";


console.log(`ini width handphonya ${width}`);

export default Home =() =>{
    const navigation = useNavigation('')
  const [activeDot, setActiveDot] = useState(0);
  const _carousel = useRef();

  const handleCarouselClick = (item, index) => {
    console.log("Clicked item:", item, "at index:", index);
    // ... your click actions here
    const url = item.url;
    Linking.openURL(url);
  };

  const handleMenuItemClick = (item, index ) => {
    console.log('item handleMenuItemClick item id' +item.id)

    switch (item.id) {
        case 1:
            navigation.replace('Kitab');
        case 2:
            navigation.replace('Kitab');
          break;
        default:
          // Tindakan yang ingin Anda lakukan jika item.id tidak cocok dengan kasus di atas
          break;
      }
  }
  
  const ListItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };

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
        <TouchableOpacity onPress={()=> handleMenuItemClick(item, index)}>
          {item.icon}
        </TouchableOpacity>
      </View>
    );
  };

  const RenderSectionHeader = ({ section }) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>
      {section.horizontal ? (
        <FlatList
          horizontal
          data={section.data}
          renderItem={ItemToko}
          showsHorizontalScrollIndicator={false}
        />
      ) : null}
    </>
  );

  const ItemToko = ({ item }) => <ListItem item={item} />;
  const ItemListToko = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }
    return <ListItem item={item} />;
  };

  return (
    <SafeAreaView className="flex-1">
      {/* <StatusBar style="auto" backgroundColor={"#FF0000"} /> */}
      {/* <View className="bg-[#FF0000] h-8 justify-center">
        <Text> Syamail Muhammadiyah</Text>
      </View> */}
      <ScrollView>
        <Carousel
        //   autoplay={true}
          loop={true}
          data={data}
          ref={_carousel}
          renderItem={_renderItem}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index) => setActiveDot(index)}
        />

        <View className=" justify-center">
          <Pagination
            activeDotIndex={activeDot}
            dotsLength={data.length}
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
            keyExtractor={(item) => item.alt}
            scrollEnabled={false}
          />
        </View>
        <View className="bg-[#1eb019] h-8 justify-center">
          <Text> Belilah Buku Aslinya di Mitra Toko Kitab Kuning</Text>
        </View>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={RenderSectionHeader}
          renderItem={ItemListToko}
        />

        <View className="bg-[#1eb019] h-8 justify-center mb-20">
          <Text> Ngaji Kitab Syamail Muhammadiyah</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


  