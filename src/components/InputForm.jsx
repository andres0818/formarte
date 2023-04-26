import React from "react";
import { StyleSheet, TextInput } from "react-native";

const InputForm = ({ placeholder = "Email" }) => {
  return (
    <TextInput
      style={styles.container}
      className="bg-gray-100 w-2/3 h-10 text-lg rounded-lg"
      placeholder={placeholder}
    />
  );
};

export default InputForm;

const styles = StyleSheet.create({
  container: {
    elevation: 4,
  },
});
