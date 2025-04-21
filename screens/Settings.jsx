import { View } from "react-native-animatable";
import Text from "../components/Text";
import Color from "../assets/color/Color";
import { styles } from "../assets/css/Style";
import Carousel from "react-native-reanimated-carousel";
import { width } from "../data/Data";
import { useMemo, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SpecifiedView } from "../components/SpecifiedView"; 
import { Button } from "react-native-paper";
export default Settings = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const PromotionSlide = [
    {
      id_img: 1,
      src_img:
        "https://daarulhijrah.com/wp-content/uploads/2019/02/header_gpmandiri.jpg",
      text_img: "Paket Wakaf Pondok",
      url: "http://pesantren.daarulhijrah.org",
      status: 0,
    },
    {
      id_img: 2,
      src_img:
        "https://daarulhijrah.com/wp-content/uploads/2019/02/header_gpmandiri_1.jpg",
      text_img: "Kitab Kuning Digital",
      url: "https://play.google.com/store/apps/dev?id=9023573855525788514",
      status: 0,
    },
    {
      id_img: 3,
      src_img:
        "https://daarulhijrah.com/wp-content/uploads/2019/02/kailani-Banner-1024x500.jpg",
      text_img: "Kailani Izzi",
      url: "https://play.google.com/store/apps/details?id=id.kitabkuning.islam.shorof.kailani.izzi",
      status: 0,
    },
    {
      id_img: 4,
      src_img:
        "https://daarulhijrah.com/wp-content/uploads/2019/02/Belajar-Qiroah.jpg",
      text_img: "Belajar Qiroah",
      url: "https://play.google.com/store/apps/details?id=id.kitabkuning.belajar.qiroah",
      status: 0,
    },
    {
      id_img: 6,
      src_img:
        "https://1.bp.blogspot.com/-GyyZgCaDsz0/XY4VSOEeadI/AAAAAAAAAgM/FZAfWNPohFISHYdHLTihjZxYJPNRPICdQCLcBGAsYHQ/s640/IslamWasathiyah.jpg",
      text_img: "Majelis Info",
      url: "https://majelis.info/",
      status: 0,
    },
    {
      id_img: 7,
      src_img:
        "https://apps.daarulhijrah.com/wp-content/uploads/2020/02/Banner-1024x500-Ghoyah-wa-Taqrib.jpg",
      text_img: "Matan Taqrib",
      url: "https://play.google.com/store/apps/details?id=id.kitabkuning.islam.ghoyah.wa.taqrib",
      status: 0,
    },
    {
      id_img: 9,
      src_img:
        "https://apps.daarulhijrah.com/wp-content/uploads/2020/03/Banner-1024x500-Ratib.jpg",
      text_img: "Ratib Al-Haddad",
      url: "https://play.google.com/store/apps/details?id=id.ratib.dhtech.alhaddad",
      status: 0,
    },
    {
      id_img: 10,
      src_img:
        "https://apps.daarulhijrah.com/wp-content/uploads/2021/01/usfuriyahBanner-1024x500-Error.jpg",
      text_img: "Error Update Ushfuriyah",
      url: "https://ichwanul.com/2021/01/03/mengatasi-aplikasi-force-close/",
      status: 1,
    },
    {
      id_img: 13,
      src_img:
        "https://kitabkuning.id/wp-content/uploads/2023/07/Guru-dan-Ayah-kami-KH.-Muhammad-Alakfi-bin-H.-Abdur-Rasyid-dan-Sahabat-kami-Ustadz-Kurniawan-bin-Erwin.jpg",
      text_img: "Duka Cita",
      url: "https://kitabkuning.id/artikel/biografi-kh-muhammad-alakfi-bin-h-abdur-rasyid/",
      status: 0,
    },
    {
      id_img: 14,
      src_img:
        "https://kitabkuning.id/wp-content/uploads/2023/02/KitabKuning.id_.jpg",
      text_img: "Kitab Kuning Digital",
      url: "https://kitabkuning.id",
      status: 1,
    },
    {
      id_img: 15,
      src_img:
        "https://blogger.googleusercontent.com/img/a/AVvXsEhUKjJK2dBokXRZ9eQzv_GPPL3g2PSuUnucSwP7N9AMyiGQFfRq-Ica60E_jLKvAgW7ZE9EY0ZLdkAhh5M0UfjVzDRfaMHv2juRsDJtdF_I0Bxz5BHdD3PrCeFpCd0DloeqC5lHfGRuaNKDbDURPv0X-BFhXbCYpkBmykJrEG4JiNbU_3D9c-t-YmeS0Z_5",
      text_img: "Maulid Markaz",
      url: "https://www.instagram.com/ahmad_alfarisi_mawardi/",
      status: 0,
    },
    {
      id_img: 16,
      src_img:
        "https://kitabkuning.id/wp-content/uploads/2024/02/Banner-Kitab.jpg",
      text_img: "Doa Khatam Al-Qur`an Full",
      url: "https://kitabkuning.id/doa-doa/doa-khataman-al-quran-versi-panjang/",
      status: 0,
    },
    {
      id_img: 17,
      src_img:
        "https://i0.wp.com/kitabkuning.id/wp-content/uploads/2023/08/Cover-Rawi-Maulid-Nabi.jpg?w=1024&ssl=1",
      text_img: "Kitab Rawi Android",
      url: "https://kitabkuning.id/apps/aplikasi-rawi-maulid-nabi-muhammad-saw-merayakan-hari-maulid-dengan-penuh-hikmah/",
      status: 0,
    },
    {
      id_img: 18,
      src_img:
        "https://kitabkuning.id/wp-content/uploads/2024/08/Banner-Kitab.jpg",
      text_img: "Kitab Kuning Digital",
      url: "https://s.id/28RBh",
      status: 1,
    },
    {
      id_img: 19,
      src_img:
        "https://ichwanul.com/wp-content/uploads/2025/02/Banner-Kitab.jpg",
      text_img: "-",
      url: "https://s.id/fiqih-fathul-muin",
      status: 1,
    },
  ];

  function handleCarousel(item, index) {
    console.error("click", item);
  }
  const renderItemCarousel = (item, index) => {
    return (
      <TouchableOpacity
        style={{ paddingHorizontal: 8 }}
        onPress={() => handleCarousel(item, index)}
      >
        <View style={styles.containerDefault}>
          <ImageBackground
            source={item.image}
            resizeMode="contain"
            style={{
              width: width - 32, // kurangi biar ada ruang
              height: 150,
              borderRadius: 8,
              overflow: "hidden",
              backgroundColor: Color.black100,
            }}
          >
            <Image
              source={item.image}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 8,
                backgroundColor: Color.black700,
              }}
            />
          </ImageBackground>
          <Text>{item.id}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  return (
    <SpecifiedView style={{ marginHorizontal: 8, marginTop: 8 }}>
      <View style={styles.containerDefault}>
        <Carousel
          height={150}
          loop={true}
          width={width * 0.85}
          autoPlay={true}
          data={PromotionSlide}
          scrollAnimationDuration={2000}
          onSnapToItem={setActiveIndex}
          renderItem={renderItemCarousel}
          mode="parallax"
          modeConfig={{ parallaxScrollingOffset: 20 }}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
        />
      </View>

      <Button onPress={() => bottomSheetRef.current?.expand()}>
        <Text> aldkfa;lfdkjaf </Text>
      </Button> 
    </SpecifiedView>
  );
};
