import React from "react";
import { Text, View } from "react-native";
import Table from "./Table";

const Ratings = () => {
  return (
    <View className="flex px-4 ">
      <Text className="flex w-full mb-8 text-3xl text-green-400 font-bold text-center">
        Calificaciones
      </Text>

      <View className="flex-1 overflow-hidden rounded-lg border ">
        <Table objetive="Objetive" good="" />
        <Table title="Matemáticas" score="75" good={false} />
        <Table title="Lenguaje" score="90" />
        <Table title="Ciencias Sociales" score="80" good={false} />
        <Table title="Ciencias Naturales" score="70" good={false} />
        <Table title="Ingles" score="85" />
        <Table title="Total" score="400" objetive="425" good={false} />
      </View>
      <Text className='my-6 text-green-400 font-bold text-lg text-center '>Animo!!! Falta poco para cumplir la meta</Text>
    </View>
  );
};

export default Ratings;
