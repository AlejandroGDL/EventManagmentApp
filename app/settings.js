import { StyleSheet, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

import MyButton from "../src/components/UI/Button";
import UserComponent from "../src/components/UI/User";
import Theme from "../src/styles/Theme";

const settings = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Eventos Disponibles",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
          headerTitle: "",
          headerRight: () => "",
        }}
      />

      <UserComponent />
      <MyButton>Cerrar sesión</MyButton>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({});
