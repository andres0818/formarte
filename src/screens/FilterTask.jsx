import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { fondoFiltro } from "../img";

const FilterTask = () => {
  return (
    <View className="">
      <View className="flex  items-center px-8 ">
        <Image
          className="absolute w-full h-full rounded-md"
          source={fondoFiltro}
        />
        <Text className="text-white font-semibold text-base mt-5">
          Filtra el programa que deseas estudiar
        </Text>
        <View className="w-full px-8 mt-6 mb-8 ">
          <TextInput
            placeholder="Modalidad"
            className="bg-white w-full h-16 px-4 font-bold text-sm border-y-stone-500 dark:bg-gray-300 border rounded-t-lg"
          />
          <TextInput
            placeholder="Ciudad"
            className="bg-white w-full h-16 px-4 font-bold text-sm border-y-stone-500 dark:bg-gray-300 border"
          />
          <TextInput
            placeholder="¿Cuando presentarás el examen?"
            className="bg-white w-full h-16 px-4 font-bold text-sm border-y-stone-500 dark:bg-gray-300 border"
          />
          <TextInput
            placeholder="Jornada"
            className="bg-white w-full h-16 px-4 font-bold text-sm border-y-stone-500 dark:bg-gray-300 border"
          />
          <TextInput
            placeholder="Programa"
            className="bg-white w-full h-16 px-4 font-bold text-sm border-y-stone-500 dark:bg-gray-300 border rounded-b-lg"
          />
          <TouchableOpacity className="flex items-center bg-green-400 rounded-lg px-8 h-12 mt-0.5 justify-center">
            <Text className="text-white font-bold text-base">Buscar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FilterTask;
