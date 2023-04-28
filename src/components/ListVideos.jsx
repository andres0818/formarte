import React from "react";
import Videos from "./Videos";
import HiddenBtn from "./HiddenBtn";

const ListVideos = () => {
  return (
    <HiddenBtn title='Videos explicativos'>
      <Videos title="Ingles" />
      <Videos title="Lenguaje" />
      <Videos title="Matemáticas" />
      <Videos title="Ciencias Sociales" />
    </HiddenBtn>
  );
};

export default ListVideos;
