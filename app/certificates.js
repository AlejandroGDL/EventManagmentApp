import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";

//Estilos y temas
import Theme from "../src/styles/Theme";

//Componentes personalizados
import MyText from "../src/components/UI/Text";
import CertificateCard from "../src/components/UI/CertificateCard";

const certificates = () => {
  return (
    <View style={styles.ConCerticates}>
      <Stack.Screen
        options={{
          title: "Eventos Disponibles",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
          headerTitle: "",
        }}
      />
      <MyText
        h1
        bold
        color={Theme.colors.white}
      >
        Eventos Asistidos
      </MyText>

      <ScrollView style={styles.CertificatesScroll}>
        <CertificateCard />
      </ScrollView>
    </View>
  );
};

export default certificates;

const styles = StyleSheet.create({
  ConCerticates: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Theme.colors.primary,
  },
  CertificatesScroll: {
    marginTop: 50,
    flex: 1,
    width: "90%",
  },
});
