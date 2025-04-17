import { Platform, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "../assets/color/Color";
import { StatusBar } from "expo-status-bar";
import React from 'react';
import { useTheme } from 'react-native-paper';

export const SpecifiedView = ({ children, style }) => {
    const { colors } = useTheme();
    return Platform.OS === 'ios' ? (
        <ScrollView>
            <View style={[{ flex: 1, backgroundColor: colors.background }, style]}>
                {children}
            </View>
        </ScrollView>
    ) : (
        <ScrollView>
            <View style={[{ flex: 1, backgroundColor: colors.background }, style]}>
                {children}
            </View>
        </ScrollView>
    )
}