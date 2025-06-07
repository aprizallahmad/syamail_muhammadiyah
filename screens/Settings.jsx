import Text from "../components/Text";
import Color from "../assets/color/Color";
import { useMemo, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { SpecifiedView } from "../components/SpecifiedView";
import { Button } from "react-native-paper";
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';


export default Settings = () => {
  const [activeIndex, setActiveIndex] = useState(0);



  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  return (
    <SpecifiedView className="flex-1 bg-white"> 
        {/* Header */}
        <View className="flex-row items-center px-4 py-3 border-b border-gray-200">
          <Text className="text-lg font-semibold ml-4">Profil</Text>
        </View>

        {/* Profile Info */}
        <View className="items-center mt-6 bg-slate-600">
          <Image
            source={{ uri: 'https://i.imgur.com/1Q9Z1Zm.jpg' }} // ganti dengan foto profil
            className="w-24 h-24 rounded-full"
          />
          <TouchableOpacity className="absolute right-6 top-4 bg-red-600 rounded-full px-3 py-1">
            <Text className="text-white text-sm">edit</Text>
          </TouchableOpacity>
          <Text className="text-lg font-bold mt-3">aprizallahmad</Text>
          <Text className="text-gray-500">aprizallahmad@gmail.com</Text> 
          {/* Badges */}
          <View className="flex-row mt-2 space-x-2">
            <Image source={{ uri: 'https://via.placeholder.com/30' }} className="w-8 h-8" />
            <Image source={{ uri: 'https://via.placeholder.com/30' }} className="w-8 h-8" />
          </View>
        </View>

        {/* Semangat & Doa */}
        <View className="left-0 right-0 z-50 mt-[-10] bg-red-700 flex-row justify-around py-3 rounded-t-xl">
          <View className="items-center">
            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-yellow-400 mr-1" />
              <Text className="text-white text-sm">0 Orang</Text>
            </View>
            <Text className="text-white text-xs">memberimu semangat</Text>
          </View>
          <View className="items-center">
            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-yellow-400 mr-1" />
              <Text className="text-white text-sm">2 Orang</Text>
            </View>
            <Text className="text-white text-xs">mendoakanmu</Text>
          </View>
        </View>

        <Text className="text-center text-xs text-gray-500 mt-2">Data 7 hari terakhir</Text>

        {/* Menu List */}
        <View className="mt-4">
          <View icon={<MaterialIcons name="menu-book" size={24} color="black" />} label="Aktivitas Tilawah" />
          <View icon={<Ionicons name="book-outline" size={24} color="black" />} label="Riwayat Khataman" />
          <View icon={<FontAwesome5 name="coins" size={24} color="black" />} label="Poin Saya" />
          <View icon={<MaterialIcons name="attach-money" size={24} color="black" />} label="Aktivitas Infaq" />
          <View icon={<MaterialIcons name="volunteer-activism" size={24} color="black" />} label="Aktivitas Doa" />
        </View> 


    </SpecifiedView>
  );
};


const style = {
  profile: {
    flex: 1, // the number of columns you want to devide the screen into
    backgroundColor: Color.primary,

  },

}