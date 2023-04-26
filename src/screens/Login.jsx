import { KeyboardAvoidingScrollView } from "@tbnb/react-native-keyboard-sticky-avoiding-scroll-view";
import React from "react";
import {View } from "react-native";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import FormLogin from "../components/FormLogin";

const Login = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white dark:bg-gray-700">
      <KeyboardAvoidingScrollView
        stickyFooter={<NavBar navigation={navigation} />}
      >
        <View className="mt-10"></View>
        <Header titulo="Inicio Sesión" subtitulo="" />
        <FormLogin navigation={navigation}/>
      </KeyboardAvoidingScrollView>
    </View>
  );
};

export default Login;
