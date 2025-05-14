import { View, TextInput, StyleSheet, SafeAreaView, Pressable, Text } from "react-native";

import { Default } from "../styles/themes/theme";

export function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.Entradas_texto} placeholder="Usuario" />
      <TextInput style={styles.Entradas_texto} placeholder="Contraseña" />
      <Pressable style={styles.button}>
        <Text> Iniciar Sesion </Text>
      </Pressable>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: "1",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Default.colors.secondary,
    width: "100%",
    height: "50%",
    paddingHorizontal: 68,
    borderBottomEndRadius:40,
    borderBottomStartRadius:40
  },
  Entradas_texto: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: Default.colors.primary,
    borderWidth: 1,
    borderRadius: 40,
    width: "100%",
    fontSize: 20,
  },
  button:{
    backgroundColor: Default.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 40,
  }
});
