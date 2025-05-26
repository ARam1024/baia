import { Slot } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../styles/colors";
export default function Layout() {
  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={gradients.yellow_rose}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <Slot />
      </LinearGradient>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
