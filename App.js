import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { AuthProvider } from './src/components/AuthContext';
import { ExpoRoot } from 'expo-router';

export default function App() {
  return (
    <AuthProvider style={styles.container}>
      <ExpoRoot />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,

    alignItems: 'center',
  },
});
