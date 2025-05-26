import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons/";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ChatView from "./chatView";
import { Home } from "../components/otherviews/Home";
import { Libros } from "../components/otherviews/Libros";
import { colors } from "../styles/colors";

export default function OtherViews() {
  const [activeForm, setActiveForm] = useState("home");

  const formComponents = {
    home: <Home />,
    libros: <Libros />,
    bot: <ChatView />,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.center}>
        {formComponents[activeForm] || <ChatView />}
      </View>
      <View style={styles.navbar}>
        <Pressable
          style={[
            styles.boton_navbar,
            activeForm === "home" && styles.boton_navbar_active,
          ]}
          onPress={() => activeForm !== "home" && setActiveForm("home")}
          disabled={activeForm === "home"}
        >
          <Ionicons name="home" size={20} color={colors.white_75} />
          <Text>Inicio</Text>
        </Pressable>
        <Pressable style={[
            styles.boton_navbar,
            activeForm === "libros" && styles.boton_navbar_active,
          ]}
          onPress={() => activeForm !== "libros" && setActiveForm("libros")}
          disabled={activeForm === "libros"}>
          <AntDesign name="book" size={20} color={colors.white_75}/>
          <Text>Libros</Text>
        </Pressable>

        <Pressable style={[
            styles.boton_navbar,
            activeForm === "bot" && styles.boton_navbar_active,
          ]}
          onPress={() => activeForm !== "bot" && setActiveForm("bot")}
          disabled={activeForm === "bot"}>
          <FontAwesome5 name="robot" size={20} color={colors.white_75} />
          <Text>Chatbot</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  center: {
    flex: 5,
  },
  navbar: {
    flexDirection: "row",
    flex: 0.28,
    alignItems: "center",
    justifyContent: "space-between",
  },
  boton_navbar: {
    flex: 1,
    borderRadius: 5,
    alignItems: "center",
  },
  boton_navbar_active: {
    backgroundColor: colors.white_25,
  },
});
