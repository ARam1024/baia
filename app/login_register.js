import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Pressable,
  Text,
} from "react-native";
import { Default } from "../styles/themes/theme";
import { Login } from "../components/Login";
const gato = require("../assets/VectorSinLibros.png");

export default function Login_register() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagen}>
        <View style={styles.container_rl_}>
          <Pressable style={styles.buttom_Login}>
            <Text>Login</Text>
          </Pressable>
          <Pressable style={styles.buttom_Register}>
            <Text>Register</Text>
          </Pressable>
        </View>
        <Image source={gato} />
      </View>
      <Login />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: "1",
    alignItems: "center",
    backgroundColor: Default.colors.background,
    height: "100%",
    position: "relative",
  },
  imagen: {
    alignItems: "center",
    width: "100%",
    paddingBottom: 20,
  },
  container_rl_: {
    flexDirection: "row",
    backgroundColor: Default.colors.background,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
  },
  buttom_Login: {
    flex: 2,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: Default.colors.secondary,
    borderStartStartRadius: 40,
  },
  buttom_Register: {
    flex: 2,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: Default.colors.primary,
    borderEndStartRadius: 40,
  },
  l_r: {
    flex: "1",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Default.colors.secondary,
    width: "100%",
    height: "100%",
  },
});
