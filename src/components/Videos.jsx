import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Videos = ({
  title = "Titulo",
  videos = [
    { title: "Video uno" },
    { title: "Video dos" },
    { title: "Video tres" },
  ],
}) => {
  const [isActive, setIsActive] = useState("h-0 hidden");

  const handlerPress = () => {
    setIsActive(isActive === "h-0 hidden" ? "" : "h-0 hidden");
  };

  return (
    <View className="my-0.5">
      <TouchableOpacity
        onPress={handlerPress}
        className={`flex justify-center h-10 bg-gray-200 dark:bg-gray-500 `}
        style={{ elevation: 12 }}
      >
        <Text className="text-center text-xl font-bold dark:text-white">{title}</Text>
      </TouchableOpacity>
      <View
        style={styles.list}
        className={`w-full flex bg-gray-200 my-1.5 dark:bg-gray-400  ${isActive}`}
      >
        {videos.map((item, index) => (
          <Text className="border py-2  dark:text-slate-100 font-bold pl-1" key={index}>
            {item.title}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Videos;

const styles = StyleSheet.create({
  list: {
    elevation: 8,
  },
});
