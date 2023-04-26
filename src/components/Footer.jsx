import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { facebook, instagram, recurso, youtube } from "../img";

const Footer = () => {
  return (
    <View className="bg-gray-800 pb-6 flex items-center">
      <Text className="text-white text-2xl mt-8">
        Qué tal si nos vemos en:
      </Text>
      <View className="flex-row gap-10 -mt-6">
        <Image source={facebook} />
        <Image source={youtube} />
        <Image source={instagram} />
      </View>
      <TouchableOpacity className="flex-row mt-8 bg-green-400 rounded-3xl px-4 py-2">
        <Image className="mr-2" source={instagram} />
        <Text className="text-white text-lg">¿Tienes alguna pregunta?</Text>
      </TouchableOpacity>
      <Text className="text-white text-lg mt-4">Whatsapp: +57 3005570054</Text>
      <Text className="text-white text-lg mt-4">Aplica para Medellín y Bogotá</Text>
      <Image className="mt-4 " source={recurso} />
    </View>
  );
};

export default Footer;
