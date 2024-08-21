import { StyleSheet, Button } from "react-native";
import { Stack, Link } from "expo-router";

import Theme from "../src/styles/Theme";

import User from "../src/UserData";

import Settings from "../src/icons/Settings";

import MyButton from "../src/components/UI/Button";

//Autehtication
import { useAuth } from "../src/components/AuthContext";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Layout() {
  // const { isAuthenticated } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push("/index");
  //   }
  // }, [isAuthenticated]);

  return (
    <Stack
      styles={styles.StackContainer}
      screenOptions={{
        title: "¡Bienvenid@ " + User.name + "!",

        headerTintColor: Theme.colors.white,
        headerStyle: {
          backgroundColor: Theme.colors.primary,
        },
        headerRight: () => (
          <Link
            asChild
            href={"/settings"}
          >
            <Settings />
          </Link>
        ),
      }}
    />
  );
}

const styles = StyleSheet.create({
  StackContainer: {
    flex: 1,
    backgroundColor: "red",
  },
});
