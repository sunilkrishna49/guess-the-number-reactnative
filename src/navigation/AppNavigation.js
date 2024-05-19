import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameStartScreen from "../screens/GameStartScreen";
import OpponentScreen from "../screens/OpponentScreen";
import GameOverScreen from "../screens/GameOverScreen";
const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GameStart"
          component={GameStartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Opponent"
          component={OpponentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GameOver"
          component={GameOverScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
