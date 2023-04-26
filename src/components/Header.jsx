import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import fondo from "../img/bannerhome-3.png";
import lineaHeader from "../img/lineaHeader.png";

const Header = ({
  titulo = "Formarte Medellín",
  subtitulo = "Preicfer y Preuniversitarios en Medellín",
}) => {
  return (
    <View className="w-full items-center mb-8">
      <Text className="text-green-400 text-3xl font-bold m-3 mt-8">
        {titulo}
      </Text>
      <Text className="text-slate-700 dark:text-white font-semibold text-lg mb-8">
        {subtitulo}
      </Text>
      <Image className="w-full h-40 absolute" source={fondo} />
      <Image className='w-64 h-1 ' source={lineaHeader}/>
    </View>
  );
};

export default Header;
