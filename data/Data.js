import { Dimensions, Image, View } from "react-native";
import IMAGES from "../assets/banner"; 
import Text from "../components/Text"
 

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

export const NAMA_KITAB = "syamail_muhammadiyah";
export const dataCarousel = [
  {
    id: 1,
    title_kitab: "Kitab Kuning",
    image: IMAGES.KITAB_KUNING,
    url: "https://kitabkuning.id",
  },
  {
    id: 2,
    title_kitab: "Error Update",
    image: IMAGES.ERROR_UPDATE,
    url: "https://ichwanul.com/2021/android/aplikasi/mengatasi-aplikasi-force-close/",
  },
  {
    id: 3,
    title_kitab: "Majelis Info",
    image: IMAGES.MAJELIS_INFO,
    url: "https://majelis.info",
  },
  {
    id: 3,
    title_kitab: "Youtube Markaz",
    image: IMAGES.MARKAZ,
    url: "https://www.youtube.com/@UstadzAhmadAlfarisi",
  },
];
export const itemData = [
  {
    id: 1,
    icon: (
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../assets/png/icon512.jpg")}
      />
    ),
    title_menu: (
       
        <Text style={{textAlign: "center"}} 
        >
          Daftar Isi
        </Text>
      
    ),
  },
  {
    id: 2,
    icon: (
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../assets/png/menu_favorite.png")}
      />
    ),
    title_menu: <Text style={{textAlign: "center"}}>Ditandai</Text>,
  },
  {
    id: 3,
    icon: (
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../assets/png/menu_recent.png")}
      />
    ),
    title_menu: <Text style={{textAlign: "center"}} 
        >Bacaan Terakhir</Text>,
  },

  {
    id: 4,
    icon: (
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../assets/png/menu_setting.png")}
      />
    ),
    title_menu: <Text style={{textAlign: "center"}} 
        >Setting</Text>,
  },

  {
    id: 5,
    icon: (
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../assets/png/menu_review.png")}
      />
    ),
    title_menu: <Text style={{textAlign: "center"}} 
        >Beri Nilai</Text>,
  },

  {
    id: 6,
    icon: (
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../assets/png/menu_other_apps.png")}
      />
    ),
    title_menu: <Text style={{textAlign: "center"}} 
        >Aplikasi Lain</Text>,
  },
  {
    id: 7,
    icon: (
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../assets/png/menu_info.png")}
      />
    ),
    title_menu: <Text style={{textAlign: "center"}} 
        >Tentang Aps</Text>,
  },
  {
    id: 8,
    icon: (
      <View style={{ width: 100, height: 100, justifyContent: "center" }}>
        <Image
          style={{ width: 100, height: 40 }}
          source={require("../assets/png/logo_dht_1.png")}
        />
      </View>
    ),
    title_menu: <Text style={{textAlign: "center"}} 
        >Informasi</Text>,
  },
  {
    id: 9,
    icon: (
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../assets/png/logo_pesantren.png")}
      />
    ),
    title_menu: <Text style={{textAlign: "center"}} 
        >Profil</Text>,
  },
];
export const SECTIONS = [
  {
    title_section: "Made for you",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1/200",
      },
      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/10/200",
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1002/200",
      },
      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1006/200",
      },
      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1008/200",
      },
    ],
  },
];
