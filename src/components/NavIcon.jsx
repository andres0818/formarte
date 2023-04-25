import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const NavIcon = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={props.icon} />
    </View>
  );
};

export default NavIcon;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: "35%",
    resizeMode: "contain",
  },
});
