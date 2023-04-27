import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import * as icon from "../img";
import { RUTAS } from "../RoutesVariants";

const NavBar = ({ navigation, route }) => {
  return (
    <View style={styles.container} className=" bg-white dark:bg-gray-500">
      <TouchableOpacity
        className={
          route?.name === RUTAS.HOME && "bg-gray-300 dark:bg-gray-600 "
        }
        onPress={() => navigation.navigate(RUTAS.HOME)}
      >
        <Image style={styles.img} source={icon.home} />
      </TouchableOpacity>
      <TouchableOpacity
        className={
          route?.name === RUTAS.ENTRENATE && "bg-gray-300 dark:bg-gray-600 "
        }
        onPress={() => navigation.navigate(RUTAS.ENTRENATE)}
      >
        <Image style={styles.img} source={icon.entrenador} />
      </TouchableOpacity>
      <TouchableOpacity
        className={
          route?.name === RUTAS.HAZLO && "bg-gray-300 dark:bg-gray-600 "
        }
        onPress={() => navigation.navigate(RUTAS.HAZLO)}
      >
        <Image style={styles.img} source={icon.prueba} />
      </TouchableOpacity>
      <TouchableOpacity
        className={
          route?.name === RUTAS.RETATE && "bg-gray-300 dark:bg-gray-600 "
        }
        onPress={() => navigation.navigate(RUTAS.RETATE)}
      >
        <Image style={styles.img} source={icon.graduado} />
      </TouchableOpacity>
      <TouchableOpacity
        className={
          (route?.name === RUTAS.LOGIN || route.name === RUTAS.REGISTER) &&
          "bg-gray-300 dark:bg-gray-600 "
        }
        onPress={() => navigation.navigate(RUTAS.LOGIN)}
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    width: 54,
    height: 54,
  },
});
