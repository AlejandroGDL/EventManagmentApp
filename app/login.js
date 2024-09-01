import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';

//Componentes personalizados
import MyButton from '../src/components/UI/Button';
import MyText from '../src/components/UI/Text';

//Tema
import Theme from '../src/styles/Theme';

//Imagenes
import TecLogo from '../src/icons/TecLogo';
import GobLogo from '../src/icons/GobLogo';

import { useAuth, signIn } from '../src/components/AuthContext';
import axios from 'axios';

const login = () => {
  const [StudentID, setStudentID] = React.useState('');
  const [StudentPassword, setStudentPassword] = React.useState('');

  const signIn = async ({ StudentID, StudentPassword }) => {
    console.log('Sign-in:', StudentID, StudentPassword);
    console.log(typeof StudentID, typeof StudentPassword);

    const studentIDNumber = Number(StudentID); // Convert StudentID to number

    try {
      const response = await axios.post(
        'https://mz15q3zq-3001.usw3.devtunnels.ms/api/login/',
        {
          StudentID: studentIDNumber,
          StudentPassword: StudentPassword,
        }
      );

      if (response.status === 200) {
        router.navigate('menu');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  const handleSignIn = () => {
    signIn({ StudentID, StudentPassword });
  };

  return (
    <View style={styles.ConLogin}>
      <View>
        <Stack.Screen
          options={{
            headerTitle: '',
            headerShown: false,
          }}
        />
        <MyText
          h1
          bold
          color={Theme.colors.primary}
        >
          Iniciar Sesión
        </MyText>
      </View>
      <View style={styles.ConLoginInputs}>
        <View>
          <TecLogo />
        </View>
        <View>
          <View style={styles.ConLoginInput1}>
            <MyText>Identificador estudiantil:</MyText>
            <TextInput
              style={styles.LoginInput}
              placeholder='eg. 1332145671'
              value={StudentID}
              onChangeText={(Number) => setStudentID(Number)}
            />
          </View>
          <View style={styles.ConLoginInput2}>
            <MyText>Contraseña:</MyText>
            <TextInput
              style={styles.LoginInput}
              placeholder='********'
              secureTextEntry={true}
              value={StudentPassword}
              onChangeText={(text) => setStudentPassword(text)}
            />
          </View>
        </View>
        <View>
          <MyText color={Theme.colors.secundary_black}>
            Olvide mi contraseña
          </MyText>
        </View>
        <View>
          <MyButton
            Function={handleSignIn}
            TextProps={{
              h3: true,
              regular: true,
              color: Theme.colors.white,
            }}
          >
            Acceder
          </MyButton>
        </View>
      </View>
      <View style={styles.ConLoginLogos}>
        <TecLogo />
        <GobLogo />
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  ConLogin: {
    flex: 1,
    alignItems: 'center',
    padding: 20,

    justifyContent: 'space-between',

    marginTop: 50,
  },
  ConLoginInputs: {
    width: '90%',
    borderColor: Theme.colors.borders,
    borderWidth: 1,
    borderRadius: Theme.radius.medium,
    gap: 40,
    padding: 20,
  },

  LoginInput: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.secundary_black,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },

  ConLoginInput1: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },

  ConLoginInput2: {
    alignItems: 'flex-start',
  },

  ConLoginLogos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
