import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import fondo from "../img/bannerhome-3.png";

const Header = () => {
  return (
    <View className="w-full items-center">
      <Text className="text-green-400 text-2xl font-bold m-3 mt-8">
        Formarte Medellín
      </Text>
      <Text className="text-slate-700 dark:text-white font-semibold text-lg m-4">
        Preicfer y Preuniversitarios en Medellín
      </Text>
      <Text className="dark:text-white mb-8">
        Filtra el programa que deseas estudiar
      </Text>
      <Image className="w-full h-40 absolute" source={fondo} />
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
