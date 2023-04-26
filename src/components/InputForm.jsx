import React from "react";
import { StyleSheet, TextInput } from "react-native";


const InputForm = ({ placeholder = "Email", props=''}) => {
  return (
    <TextInput
      style={styles.container}
      className={`bg-gray-100 w-2/3 font-bold h-10 text-lg rounded-lg pl-2 ${props}`}
      placeholder={placeholder}
    />
  );
};

export default InputForm;

const styles = StyleSheet.create({
  container: {
    elevation: 5,
  },
});
