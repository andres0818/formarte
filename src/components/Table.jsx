import React from "react";
import { Text, View } from "react-native";

const Table = ({
  title = "Materia",
  score = "Puntaje",
  objetive = "85",
  good = true,
}) => {
  const colorScore =
    (good === true && "text-green-600") ||
    (good === false && "text-yellow-500");

  const handlerTitle = (title === "Materia" && "font-bold") || ((title === "Total" && "font-bold"));

  return (
    <View className="flex-row justify-between border-black border-1 bg-gray-200 dark:bg-gray-400">
      <Text
        className={`${handlerTitle} text-lg flex-2 border-b border-r border-l p-2`}
        style={{ width: "50%" }}
      >
        {title}
      </Text>
      <Text
        className={`${colorScore} text-lg flex-1 border-b border-r p-2 font-bold`}
        style={{ width: "25%" }}
      >
        {score}
      </Text>
      <Text
        className="text-lg flex-1 border-b border-r p-2 font-bold"
        style={{ width: "25%" }}
      >
        {objetive}
      </Text>
    </View>
  );
};

export default Table;
