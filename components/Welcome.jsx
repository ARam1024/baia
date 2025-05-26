import { Text, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { colors } from "../styles/colors";
import { sizetext } from "../styles/sizetext";
const logo = require("../assets/icon.png");

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={sizetext.text_h1}>¡Hola!</Text>
      <View style={styles.container_image}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Link href="/login_register" style={styles.btn}>
        <Text style={sizetext.text_btn}>Iniciar</Text>
      </Link>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16
  },
  container_image:{
    alignItems: "center",
    alignContent: "center",
    backgroundColor: colors.white_50,
    borderRadius: 30,
    width: 250,
    borderWidth:5,
    borderColor:colors.gray_25
  },
  logo:{
    height: 250,
    resizeMode: "contain"
  },
  btn: {
    textAlign: "center",
    backgroundColor: colors.gray_25,
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: 250,
    borderRadius: 12,
  },
});
