import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import slide from "../img/slide.jpg";
import slide2 from "../img/slide-2.jpg";
import left from "../img/left.png";
import right from "../img/right.png";

const Slide = ({ banners = [slide, slide2] }) => {
  const [banner, setBanner] = useState({ img: banners[0], index: 0 });

  const bannerLength = banners.length - 1;

  const leftBanner = () => {
    banner.index === 0
      ? setBanner({
          img: banners[bannerLength],
          index: bannerLength,
        })
      : setBanner({
          img: banners[banner.index - 1],
          index: banner.index - 1,
        });
  };

  const rightBanner = () => {
    banner.index === bannerLength
      ? setBanner({
          img: banners[0],
          index: 0,
        })
      : setBanner({
          img: banners[banner.index + 1],
          index: banner.index + 1,
        });
  };

  return (
    <View style={styles.container} className="w-full h-32 ">
      <Image className="w-full h-32 absolute" source={banner.img} />
      <TouchableOpacity onPress={leftBanner}>
        <Image source={left} />
      </TouchableOpacity>
      <TouchableOpacity onPress={rightBanner}>
        <Image source={right} />
      </TouchableOpacity>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
