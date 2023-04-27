import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Slide from "../components/Slide";
import InfoText from "../components/InfoText";
import NavBar from "../components/NavBar";
import { KeyboardAvoidingScrollView } from "@tbnb/react-native-keyboard-sticky-avoiding-scroll-view";
import Footer from "../components/Footer";

const Home = ({ navigation, route }) => {

  return (
    <View className="flex-1 bg-white dark:bg-gray-700">
      <KeyboardAvoidingScrollView
        stickyFooter={<NavBar  route={route} navigation={navigation} />}
      >
        <Header />
        <View className="mb-10" />
        <Slide />
        <View className="mb-10" />
        <InfoText />
        <View className="mb-10" />
        <Footer />
      </KeyboardAvoidingScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  navbar: {
    position: 1,
  },
});
