import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
  Button
} from "react-native";

import { Default } from "../../styles/themes/theme";

export function Login() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.Entradas_texto} placeholder="Usuario" />
      <TextInput style={styles.Entradas_texto} placeholder="Contraseña" />
      <View>
        <Pressable>
          <Text style={"fontsize: 30"}>¿Olvidaste tu contraseña?</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.texto_button}> Iniciar Sesion </Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: "1",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Default.colors.quinary,
    width: "100%",
    height: "55%",
    paddingHorizontal: 40,
    borderEndEndRadius: 40,
    borderStartEndRadius: 40,
  },
  Entradas_texto: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Default.colors.septenary,
    borderColor: Default.colors.tertiary,
    borderWidth: 2,
    borderRadius: 40,
    width: "100%",
    fontSize: 20,
  },
  button: {
    backgroundColor: Default.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 40,
  },
  texto_button: {
    fontSize: 20,
    color: Default.colors.septenary
  },
});
