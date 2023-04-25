import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import Home from "./src/screens/Home/Home";
import NavIcon from "./src/components/NavIcon";
import icon from './src/img/formarte.png'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Formarte"
          component={Home}
          options={{
            headerTitle: () => <NavIcon  icon={icon}/>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
