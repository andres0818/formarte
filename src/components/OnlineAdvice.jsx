import React from "react";
import HiddenBtn from "./HiddenBtn";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const OnlineAdvice = () => {
  return (
    <HiddenBtn title="Asesorias en línea">
      <View className="flex-row bg-white mt-1" style={{ elevation: 8 }}>
        <TextInput
          className="w-1/2 text-center border-b font-bold text-lg border-r h-12  bg-white dark:bg-gray-300"
          placeholder="DD/MM/AAA"
        />
        <TextInput
          className="w-1/2 text-center border-b font-bold text-lg h-12  bg-white dark:bg-gray-300"
          placeholder="Asesor"
        />
      </View>
      <TextInput
        className="text-center border-b font-bold text-lg h-12  bg-white dark:bg-gray-300"
        placeholder="Materia o asignatura"
      />
      <TouchableOpacity className='bg-green-400 py-3 mx-4 my-1 rounded-lg'>
        <Text className='text-white text-center font-bold text-lg'>Agendar</Text>
      </TouchableOpacity>
    </HiddenBtn>
  );
};

export default OnlineAdvice;
