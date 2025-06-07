import {
  FlatList,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SpecifiedView } from "../components/SpecifiedView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Text from "../components/Text";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

export const Favorite = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <SpecifiedView
        className=""
        style={{ paddingHorizontal: 16, marginTop: 50 }}
      >
        {/* Header Search + Time */}
        <View className="p-4 bg-[#0c223f]">
          <TextInput
            className="bg-white rounded-full px-4 py-2 mb-3"
            placeholder="Cari terjemah..."
          />
          <Text className="text-white text-xs mb-1">
            Rabu, 8 Zulhijah 1446 H
          </Text>
          <View className="flex-row justify-between text-white">
            <View>
              <Text className="text-white font-bold text-lg">Subuh</Text>
              <Text className="text-white text-sm">04:37</Text>
            </View>
            <View>
              <Text className="text-white text-xs">Terbit: 05:57</Text>
              <Text className="text-white text-xs">Dhuhr: 11:54</Text>
              <Text className="text-white text-xs">Kota Jakarta</Text>
            </View>
          </View>
        </View>

        {/* Message Alert */}
        <View className="flex-row items-center justify-between bg-green-100 px-4 py-2 mt-2 mx-4 rounded">
          <Text className="text-sm font-medium">Ada Pesan Baru Untukmu</Text>
          <TouchableOpacity className="bg-green-500 px-3 py-1 rounded">
            <Text className="text-white">Cek Yuk</Text>
          </TouchableOpacity>
        </View>

        {/* Quran Reading Progress */}
        <View className="p-4">
          <View className="flex-row items-center">
            <Image
              source={require("../assets/png/menu_favorite.png")}
              className="w-16 h-16 mr-3"
            />
            <View>
              <Text className="text-sm">Pekan ini kamu telah ngaji</Text>
              <Text className="text-xl font-bold">5 Halaman</Text>
              <View className="flex-row mt-1">
                {[...Array(7)].map((_, i) => (
                  <View
                    key={i}
                    className={`w-3 h-3 mx-0.5 rounded ${
                      i < 5 ? "bg-red-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Menu Horizontal */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-4 py-2"
        >
          {[
            { title: "Infaq", icon: "hand-heart" },
            { title: "Dzikir", icon: "notebook" },
            { title: "Kencleng Masjid", icon: "mosque" },
            { title: "More", icon: "dots-horizontal" },
          ].map((item, index) => (
            <View key={index} className="items-center mx-3">
              <MaterialCommunityIcons
                name={item.icon}
                size={30}
                color="#0c223f"
              />
              <Text className="mt-1 text-xs font-medium">{item.title}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Banner */}
        <View className="px-4 my-2">
          <Image
            source={require("../assets/png/menu_favorite.png")}
            className="w-full h-24 rounded-xl"
            resizeMode="cover"
          />
        </View>

        {/* Amin Doa Section */}
        <View className="px-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="font-semibold text-base">
              Aminkan Doa Saudaramu
            </Text>
            <TouchableOpacity>
              <Text className="text-pink-600 font-semibold">+ Buat Doa</Text>
            </TouchableOpacity>
          </View>

          {/* List Doa */}
          {[1, 2].map((_, i) => (
            <View key={i} className="bg-gray-100 rounded-xl p-3 mb-2">
              <View className="flex-row items-center mb-1">
                <FontAwesome name="user-circle-o" size={20} />
                <Text className="ml-2 text-xs text-gray-500">
                  bismillah • 25 menit lalu
                </Text>
              </View>
              <Text className="text-sm text-gray-700 mb-1">
                bismillah ya allah semoga tetap berikhtiar...
              </Text>
              <View className="flex-row justify-between">
                <TouchableOpacity>
                  <Text className="text-green-600">Aamiin</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text className="text-blue-600">Bagikan</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Tab Filter */}
        <View className="flex-row flex-wrap gap-2 p-4">
          {["Semua", "Tadabbur", "Info", "Reminder", "Doa"].map(
            (tab, index) => (
              <TouchableOpacity
                key={index}
                className="border px-3 py-1 rounded-full border-gray-400"
              >
                <Text className="text-sm">{tab}</Text>
              </TouchableOpacity>
            )
          )}
        </View>

        {/* Reminder Section */}
        <View className="px-4">
          {[
            "Tiga Amalan Sunnah Menjelang Idul Adha",
            "9 Zulhijah, Hari Penghapus Dosa",
          ].map((title, index) => (
            <View key={index} className="mb-3">
              <Image
                source={require("../assets/png/menu_favorite.png")}
                className="w-full h-32 rounded-xl"
                resizeMode="cover"
              />
              <Text className="mt-2 font-medium">{title}</Text>
            </View>
          ))}
        </View>
      </SpecifiedView>
    </View>
  );
};
