import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "nativewind";
import NavIcon from "./src/components/NavIcon";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import { StatusBar } from "react-native";
import Register from "./src/screens/Register";
import { RUTAS } from "./src/RoutesVariants";

const Stack = createNativeStackNavigator();

function MyStackNavigator({ children, toggleColorScheme }) {
  const { colorScheme } = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavIcon
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          />
        ),
      }}
    >
      {children}
    </Stack.Navigator>
  );
}

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <NavigationContainer>
      <MyStackNavigator toggleColorScheme={toggleColorScheme}>
        <Stack.Screen name={RUTAS.HOME} component={Home} />
        <Stack.Screen name={RUTAS.LOGIN} component={Login} />
        <Stack.Screen name={RUTAS.REGISTER} component={Register} />
      </MyStackNavigator>
      <StatusBar hidden={true} />
    </NavigationContainer>
  );
}
