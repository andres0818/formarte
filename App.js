import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home/Home";
import { useColorScheme } from "nativewind";
import NavIcon from "./src/components/NavIcon";
import icon from "./src/img/formarte.png";

const Stack = createNativeStackNavigator();

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Formarte"
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
              backgroundColor: colorScheme === 'dark' ? "#6B7280" : "#FFFFFF",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
