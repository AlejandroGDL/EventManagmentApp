import { StyleSheet, View, Image } from "react-native";
import React from "react";

//Componente personalizado
import MyText from "./Text";

import User from "../../UserData";
import Theme from "../../styles/Theme";

const UserComponent = () => {
  return (
    <View style={styles.ConUserComponent}>
      <Image
        source={{ uri: User.userimage }}
        style={styles.UserComponentImage}
      />
      <MyText
        h2
        bold
      >
        {User.name} {User.lastname}
      </MyText>
    </View>
  );
};

export default UserComponent;

const styles = StyleSheet.create({
  ConUserComponent: {
    alignItems: "center",
    marginVertical: 20,
  },

  UserComponentImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});
