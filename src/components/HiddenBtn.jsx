import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const HiddenBtn = ({ children }) => {
  const [isActive, setIsActive] = useState("h-0 hidden");

  const handlerPress = () => {
    setIsActive(isActive === "h-0 hidden" ? "" : "h-0 hidden");
  };
  return (
    <View className="flex justify-center">
      <TouchableOpacity
        className="bg-slate-50 py-3 dark:bg-gray-600"
        style={{ elevation: 8 }}
        onPress={handlerPress}
      >
        <Text className="text-center text-2xl font-bold  text-green-500">
          Videos explicativos
        </Text>
      </TouchableOpacity>
      <View className={`${isActive}`}>
        {children}
        </View>
    </View>
  );
};

export default HiddenBtn;
