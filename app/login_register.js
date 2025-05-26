import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Image,
  View,
  Pressable,
  Text,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Login } from "../components/forms/Login";
import { Register } from "../components/forms/Register";
import { colors } from "../styles/colors";
import { sizetext } from "../styles/sizetext";
const gato = require("../assets/VectorSinLibros.png");
export default function Login_register() {
  const [activeForm, setActiveForm] = useState("login");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagen}>
        <Image source={gato} />
      </View>
      <View style={styles.contenedor}>
        <View style={styles.contenedor_btn_l_r}>
          <Pressable
            style={[
              styles.btn_lr,
              activeForm === "login" && styles.btn_lr_active,
            ]}
            onPress={() => activeForm !== "login" && setActiveForm("login")}
            disabled={activeForm === "login"}
          >
            <Text style={sizetext.text_btn}>Login</Text>
          </Pressable>
          <Pressable
            style={[
              [styles.btn_lr],
              activeForm === "register" && styles.btn_lr_active,
            ]}
            onPress={() =>
              activeForm !== "register" && setActiveForm("register")
            }
            disabled={activeForm === "register"}
          >
            <Text style={sizetext.text_btn}>Register</Text>
          </Pressable>
        </View>

        {activeForm === "login" ? <Login /> : <Register />}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  imagen: {
    alignItems: "center",
    width: "100%",
    marginBottom: -20,
  },
  contenedor:{
    backgroundColor: colors.white_25,
    borderRadius:40
  },
  contenedor_btn_l_r: {
    flexDirection: "row",
    paddingTop: 10,
    borderStartStartRadius: 40,
    borderEndStartRadius: 40,
  },
  btn_lr: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    borderStartStartRadius: 30,
    borderEndStartRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  btn_lr_active: {
    backgroundColor: colors.white_50,
  },
});
