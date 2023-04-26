import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import InputForm from "./InputForm";

const FormLogin = ({ navigation }) => {
  return (
    <View className="py-5 flex items-center">
      <InputForm />
      <InputForm props="mt-8" placeholder="Contraseña" />
      <Text className="text-blue-700 dark:text-green-400 text-base mt-3 font-bold">
        ¿Has olvidado la contraseña?
      </Text>
      <TouchableOpacity className="bg-green-400 px-10 py-2 rounded-3xl mt-6">
        <Text className="text-white font-bold text-3xl">Inicia sesión</Text>
      </TouchableOpacity>
      <View className='flex flex-row justify-center mt-8' >
        <Text className="flex justify-center font-bold text-base">¿No tienes cuenta?, </Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate('register') }>
          <Text className="text-blue-700 dark:text-green-400 text-base font-bold">
            Registrarse
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormLogin;
