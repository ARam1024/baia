import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
  Button,
} from "react-native";

import { colors } from "../../styles/colors";
import { sizetext } from "../../styles/sizetext";

export function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.Entradas}>
        <TextInput
          style={styles.Entradas_texto}
          placeholder="Nombre de Usuario"
        />
      </View>
      <View style={styles.Entradas}>
        <TextInput style={styles.Entradas_texto} placeholder="Correo" />
      </View>
      <View style={styles.Entradas}>
        <TextInput style={styles.Entradas_texto} placeholder="Contraseña" />
      </View>
      <View style={styles.Entradas}>
        <TextInput
          style={styles.Entradas_texto}
          placeholder="Confirmar Contraseña"
        />
      </View>
      <View>
        <Pressable style={styles.button}>
          <Text style={sizetext.text_btn}>Registro</Text>
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
    backgroundColor: colors.white_50,
    gap: 20,
    padding: 40,
    borderEndEndRadius: 40,
    borderStartEndRadius: 40,
  },
  Entradas: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white_75,
    borderRadius: 40,
    gap: 10,
    paddingHorizontal: 16,
    width: "100%",
  },
  Entradas_texto: {
    flex: 4,
    fontSize: 20,
    borderLeftWidth: 2,
    borderColor: colors.rose,
  },
  button: {
    backgroundColor: colors.yellow,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 40,
  },
});
