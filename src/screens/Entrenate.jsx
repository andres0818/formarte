import React from "react";
import { Image, Text, View } from "react-native";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { KeyboardAvoidingScrollView } from "@tbnb/react-native-keyboard-sticky-avoiding-scroll-view";
import ListVideos from "../components/ListVideos";
import OnlineAdvice from "../components/OnlineAdvice";
import OnlineClasses from "../components/OnlineClasses";
import { studying } from "../img";

const Entrenate = ({ navigation, route }) => {
  return (
    <View className="flex-1 bg-white dark:bg-gray-700">
      <KeyboardAvoidingScrollView
        stickyFooter={<NavBar route={route} navigation={navigation} />}
      >
        <Header
          titulo="Entrénate"
          subtitulo="Herramientas para tu Éxito Académico"
        />
        <View className="w-full h-28 my-2 items-center overflow-hidden">
          <Image className=" w-full " source={studying} />
          <Text className="absolute mt-10 text-white font-bold text-xl">
            Camino a la U
          </Text>
        </View>
        <ListVideos />
        <OnlineAdvice />
        <OnlineClasses />
      </KeyboardAvoidingScrollView>
    </View>
  );
};

export default Entrenate;
