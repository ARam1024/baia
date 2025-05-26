import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../styles/colors";
const logo = require("../assets/VectorSinLibros.png");

export function Header() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image source={logo} style={styles.logoheader} />
      </Pressable>
      <Pressable>
        <Ionicons name="reorder-three" size={32} color={colors.black_75} />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    width: "100%",
  },
  logoheader: {
    height: 50,
    width: 60,
  },
});
