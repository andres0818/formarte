import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import InputForm from "./InputForm";

const FormRegister = ({ navigation }) => {
  return (
    <View className="pb-5  flex items-center">
      <InputForm placeholder="Nombre Completo" />
      <InputForm props="mt-5" placeholder="No. Identificación" />
      <InputForm props="mt-5" placeholder="Email" />
      <InputForm props="mt-5" placeholder="Contraseña" />
      <InputForm props="mt-5" placeholder="Celular" />
      <InputForm props="mt-5" placeholder="ciudad" />

      <TouchableOpacity className="bg-green-400 px-10 py-2 rounded-3xl mt-6">
        <Text className="text-white font-bold text-3xl">Registrarse</Text>
      </TouchableOpacity>

      <View className="flex flex-row justify-center mt-8">
        <Text className="flex justify-center font-bold text-base">
          ¿Ya tienes cuenta?,{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text className="text-blue-700 dark:text-green-400 text-base font-bold">
            Inicia Sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormRegister;
