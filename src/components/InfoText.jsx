import React from "react";
import { Text, View } from "react-native";

const InfoText = () => {
  return (
    <View className="px-11 ">
      <Text className="text-justify dark:text-white text-base">
        Somos <Text className="font-bold">Formarte</Text>, una institución
        educativa enfocada en prepararte para que obtengas un alto puntaje en
        las pruebas del Icfes Saber 11º y puedas pasar a la universidad.
        Ofrecemos formación en <Text className='font-bold'>Preuniversitarios</Text>  y <Text className='font-bold'>Preicfes</Text>  en toda Colombia,
        con modalidad presencial en las ciudades principales y virtual desde
        cualquier lugar; nuestros Preuniversitarios están orientados en
        potenciar y brindar conocimientos fundamentales para que superes los
        exámenes y pases a la universidad.
      </Text>
      <Text className="text-justify dark:text-white text-base">
        Tenemos Preuniversitario Universidad Nacional y Preuniversitario UdeA,
        para las diferentes ciudades donde tienen presencia estas dos
        universidades y para el resto de ciudades contamos con formación de
        acuerdo a cada institución. Para las que no requieren de examen de
        admisión a la universidad, ofrecemos el Preicfes que es el requisito
        principal para acceder a estas universidades.
      </Text>
    </View>
  );
};

export default InfoText;
