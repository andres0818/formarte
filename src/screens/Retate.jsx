import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { KeyboardAvoidingScrollView } from "@tbnb/react-native-keyboard-sticky-avoiding-scroll-view";
import FilterTask from "./FilterTask";
import Ratings from "../components/Ratings";

const Retate = ({ navigation, route }) => {
  return (
    <View className="flex-1 bg-white dark:bg-gray-700">
      <KeyboardAvoidingScrollView
        stickyFooter={<NavBar route={route} navigation={navigation} />}
      >
        <Header
          titulo="Rétate"
          subtitulo="Expertos en Preicfes y Preuniversitarios"
        />
        <FilterTask />
        <View className='mb-10'/>
        <Ratings />
      </KeyboardAvoidingScrollView>
    </View>
  );
};

export default Retate;
