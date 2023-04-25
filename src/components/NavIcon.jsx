import React from "react";
import { Image, StyleSheet, Switch, Text, View } from "react-native";

const NavIcon = ({ ...props }) => {
  return (
    <View className="w-full flex-row justify-center ">
      <Switch className='absolute left-0 top-4'
        value={props.colorScheme === "dark"}
        onChange={props.toggleColorScheme}
      />
      <Image style={styles.logo} source={props.icon} />
    </View>
  );
};

export default NavIcon;

const styles = StyleSheet.create({

  logo: {
    width: "35%",
    resizeMode: "contain",
  },
});
