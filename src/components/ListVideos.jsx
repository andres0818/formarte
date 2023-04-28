import React from "react";
import { Text, View } from "react-native";
import Videos from "./Videos";

const ListVideos = () => {
  return (
    <View>
      <Text className="text-center text-2xl font-bold mb-8 text-green-500">
        Videos explicativos
      </Text>
      <View>
        <Videos title="Ingles" />
        <Videos title="Lenguaje" />
        <Videos title="Matemáticas" />
        <Videos title="Ciencias Sociales" />
      </View>
    </View>
  );
};

export default ListVideos;
