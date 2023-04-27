import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { KeyboardAvoidingScrollView } from "@tbnb/react-native-keyboard-sticky-avoiding-scroll-view";

const Hazlo = ({ navigation, route }) => {
  return (
    <View className="flex-1 bg-white dark:bg-gray-700">
      <KeyboardAvoidingScrollView
        stickyFooter={<NavBar route={route} navigation={navigation} />}
      >
        <Header titulo="Hazlo" subtitulo="Practica y Mejora tus Habilidades"/>
      </KeyboardAvoidingScrollView>
    </View>
  );
};

export default Hazlo;
