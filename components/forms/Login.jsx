import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
} from "react-native";
import { Link } from "expo-router";
import { colors } from "../../styles/colors";
import { sizetext } from "../../styles/sizetext";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
export function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Entradas}>
        <FontAwesome name="user" size={24} color={colors.rose} />
        <TextInput style={styles.Entradas_texto} placeholder="Usuario" />
      </View>
      <View style={styles.Entradas}>
        <FontAwesome5 name="key" size={16} color={colors.rose} />
        <TextInput style={styles.Entradas_texto}placeholder="Contraseña" />
      </View>
      <View>
        <Pressable>
          <Text style={"fontsize: 30"}>¿Olvidaste tu contraseña?</Text>
        </Pressable>
        <Link href="/otherViews" style={styles.button}>
          <Text style={sizetext.text_btn}> Iniciar Sesion </Text>
        </Link>
      </View>
    </SafeAreaView>
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
  Entradas:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor: colors.white_75,
    borderRadius: 40,
    gap:10,
    paddingHorizontal: 16,
    width: "100%",
  },
  Entradas_texto: {
    flex:4,
    fontSize: 20,
    borderLeftWidth:2,
    borderColor: colors.rose,
  },
  button: {
    backgroundColor: colors.yellow,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 40,
  },
});
