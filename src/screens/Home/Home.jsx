import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text className="text-red-400 text-md font-bold mt-2">
        Formarte Medellín
      </Text>
      <Text>Preicfer y Preuniversitarios en Medellín</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    color: "#05e06d",
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 40,
  },
});
