import React from "react";
import HiddenBtn from "./HiddenBtn";
import { Text, View } from "react-native";

const OnlineClasses = ({
  list = [
    { data: "15/05/2023", class: "Ecuaciones lineales" },
    { data: "17/05/2023", class: "Ecuaciones Verbo to be" },
    { data: "20/05/2023", class: "El Átomo" },
  ],
}) => {
  return (
    <HiddenBtn title="Clases en linea">
      <View className='my-1 bg-white dark:bg-gray-400'>
        {list.map((element, index) => (
          <View className="flex-row justify-between" key={index}>
            <Text className="dark:text-white w-1/2 text-center font-bold text-base py-1 border-b border-r">
              {element.data}
            </Text>
            <Text className="dark:text-white w-1/2 text-center font-bold text-base py-1 border-b">
              {element.class}
            </Text>
          </View>
        ))}
      </View>
    </HiddenBtn>
  );
};

export default OnlineClasses;
