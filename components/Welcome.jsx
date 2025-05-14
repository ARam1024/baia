import {
  Text,
  Image,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Default } from "../styles/themes/theme";
import { Link } from "expo-router";
const logo = require("../assets/icon.png");

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} />
      <Link href="/login_register" style={styles.button}>
        <Text style={styles.button_text}>Bienvenido</Text>
      </Link>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: "1",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Default.colors.background,
    height: "100%",
    gap: 67,
  },
  button: {
    flex: "1",
    //backgroundColor: Default.colors.primary,
    backgroundColor: '#fffbfb',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 40,
  },
  button_text: {
    fontSize: 20,
  },
});
