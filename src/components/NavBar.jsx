import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import * as icon from "../img";
import { KeyboardAvoidingScrollView } from "@tbnb/react-native-keyboard-sticky-avoiding-scroll-view";

const NavBar = ({navigation}) => {
  return (
      <View style={styles.container} className=" bg-white dark:bg-gray-500">
        <TouchableOpacity
        onPress={()=>navigation.navigate('home')}>
          <Image style={styles.img} source={icon.home} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.img} source={icon.entrenador} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.img} source={icon.prueba} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.img} source={icon.graduado} />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('login')}
        >
          <Image style={styles.img} source={icon.usuario} />
        </TouchableOpacity>
      </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    elevation: 20,
    paddingHorizontal: 8,
    paddingTop: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    width: 54,
    height: 54,
  },
});
