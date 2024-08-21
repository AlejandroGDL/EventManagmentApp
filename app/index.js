import { StyleSheet, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

// Componentes personalizados
import MyButton from "../src/components/UI/Button";
import MyText from "../src/components/UI/Text";

//Tema
import Theme from "../src/styles/Theme";

//Imagenes
import TecLogo from "../src/icons/TecLogo";
import GobLogo from "../src/icons/GobLogo";
import WelcomeImage from "../src/icons/WelcomeImage";

const index = () => {
  return (
    <View style={styles.ConInicio}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View>
        <WelcomeImage />
      </View>
      <View>
        <MyText
          h1
          medium
          color={Theme.colors.primary}
        >
          ¡Fácil de usar!
        </MyText>
        <MyText
          h3
          medium
          color={Theme.colors.primary}
        >
          Confirma tu participación en eventos con solo tú identificación
        </MyText>
      </View>
      <View>
        <MyButton
          link="/login"
          TextProps={{
            h3: true,
            regular: true,
            color: Theme.colors.white,
          }}
        >
          Comenzar
        </MyButton>
      </View>
      <View style={styles.ConLoginLogos}>
        <TecLogo />
        <GobLogo />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  ConInicio: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,

    backgroundColor: Theme.colors.white,
  },

  ConLoginLogos: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
