import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Videos from "./Videos";
import HiddenBtn from "./HiddenBtn";

const ListVideos = () => {
  return (
    <HiddenBtn>
      <Videos title="Ingles" />
      <Videos title="Lenguaje" />
      <Videos title="Matemáticas" />
      <Videos title="Ciencias Sociales" />
    </HiddenBtn>
  );
};

export default ListVideos;
