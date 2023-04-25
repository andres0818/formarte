import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import fondo from "../img/bannerhome-3.png";
import LinearGradient from "react-native-linear-gradient";

const Header = () => {
  return (
    <View className="flex-1 items-center bg-white dark:bg-gray-700">
      <Text className="text-green-400 text-2xl font-bold mt-7">
        Formarte Medellín
      </Text>
      <Text className="text-slate-700 dark:text-white font-semibold text-lg ">
        Preicfer y Preuniversitarios en Medellín
      </Text>
      <Text className="dark:text-white">
        Filtra el programa que deseas estudiar
      </Text>
      <Image className="w-full h-40 absolute" source={fondo} />
      <View style={styles.container}>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: "auto",
  },
});
