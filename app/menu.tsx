import { StyleSheet, View, FlatList } from "react-native";

// Importamos los componentes personalizados
import MyButton from "../src/components/UI/Button";
import MyText from "../src/components/UI/Text";
import InfoCard from "../src/components/UI/InfoCard";

// Importamos el tema personalizado
import Theme from "../src/styles/Theme";

// Importamos los iconos personalizados
import Certificates from "../src/icons/Certificates";
import AvailableEvents from "../src/icons/AvailableEvents";
import CarreraBook from "../src/icons/CarreraBook";

import User from "../src/UserData";

import UserComponent from "../src/components/UI/User";

export default function Index() {
  return (
    <View style={styles.IndexContainer}>
      <UserComponent />

      <View>
        <InfoCard
          Title={"Carrera:"}
          Info={User.info.career}
          Icon={CarreraBook}
        />
        <InfoCard
          Title={"Semestre:"}
          Info={User.info.semestre}
          Icon={CarreraBook}
        />
        <InfoCard
          Title={"Horas acumuladas:"}
          Info={User.info.hours}
          Icon={CarreraBook}
        />
      </View>

      <View style={styles.ConIndexButtons}>
        <MyButton
          link="/certificates"
          Icon={Certificates}
          IconProps={{
            width: 30,
            height: 30,
          }}
          TextProps={{
            h3: true,
            color: Theme.colors.white,
            bold: true,
          }}
        >
          Tus Certificados
        </MyButton>

        <MyButton
          link="/events"
          Icon={AvailableEvents}
          IconProps={{
            width: 30,
            height: 30,
          }}
          TextProps={{
            h3: true,
            color: Theme.colors.white,
            medium: true,
          }}
        >
          Eventos Disponibles
        </MyButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  IndexContainer: {
    flex: 1,
    alignItems: "center",
    gap: 50,
  },

  ConIndexButtons: {
    display: "flex",
    gap: 20,
  },
});
