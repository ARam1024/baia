import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Pressable,
  Text,
} from "react-native";
import { Default } from "../styles/themes/theme";
import { Login } from "../components/forms/Login";

import { Register } from "../components/forms/Register";
const gato = require("../assets/VectorSinLibros.png");
export default function Login_register() {
  const [activeForm, setActiveForm] = useState("login");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagen}>
        <View style={styles.container_rl_}>
          <Pressable
            style={[
              styles.buttom_inactive_i,
              activeForm === "login" && styles.buttom_active,
            ]}
            onPress={() => activeForm !== "login" && setActiveForm("login")}
            disabled={activeForm === "login"}
          >
            <Text style={styles.texto_button}>Login</Text>
          </Pressable>
          <Pressable
            style={[
              styles.buttom_inactive_d,
              activeForm === "register" && styles.buttom_active,
            ]}
            onPress={() =>
              activeForm !== "register" && setActiveForm("register")
            }
            disabled={activeForm === "register"}
          >
            <Text style={styles.texto_button}>Register</Text>
          </Pressable>
        </View>
        <Image source={gato} />
      </View>
      {activeForm === "login" ? <Login /> : <Register />}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: "1",
    padding: 20,
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
    backgroundColor: Default.colors.senary,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
  },
  buttom_active: {
    backgroundColor: Default.colors.quinary,
  },
  buttom_inactive_i: {
    flex: 2,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: Default.colors.primary,
    borderStartStartRadius: 40,
  },
  buttom_inactive_d: {
    flex: 2,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: Default.colors.primary,
    borderEndStartRadius: 40,
  },
  texto_button: {
    fontSize: 22,
    color: Default.colors.septenary,
  },
});
