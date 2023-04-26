import React from "react";
import {
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { formarte, luna, sol } from "../img";

const NavIcon = ({ ...props }) => {
  return (
    <View className="w-full flex-row h-14 dark:bg-gray-500 justify-center ">
      <TouchableOpacity
        className="absolute left-10 top-4 bg-slate-300 p-1 rounded-full"
        onPress={props.toggleColorScheme}
      >
        <Image  source={props.colorScheme === "dark" ? luna : sol} />
      </TouchableOpacity>
      <Image source={formarte} />
    </View>
  );
};

export default NavIcon;

