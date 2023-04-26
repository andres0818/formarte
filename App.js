import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "nativewind";
import NavIcon from "./src/components/NavIcon";
import icon from "./src/img/formarte.png";
import { colorStyle } from "./src/Styles/variants";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import { StatusBar } from "react-native";
import Register from "./src/screens/Register";

const Stack = createNativeStackNavigator();

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerTitle: () => (
              <NavIcon
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
                icon={icon}
              />
            ),
            headerStyle: {
              backgroundColor:
                colorScheme === "dark" ? colorStyle.dark : colorStyle.light,
            },
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor:
                colorScheme === "dark" ? colorStyle.dark : colorStyle.light,
            },
            headerLeft: () => (
              <NavIcon
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
                icon={icon}
              />
            ),
          }}
        />
          <Stack.Screen
          name="register"
          component={Register}
          options={{
            headerStyle: {
              backgroundColor:
                colorScheme === "dark" ? colorStyle.dark : colorStyle.light,
            },
            headerLeft: () => (
              <NavIcon
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
                icon={icon}
              />
            ),
          }}
        />
      </Stack.Navigator>
      <StatusBar hidden={true} />
    </NavigationContainer>
  );
}
