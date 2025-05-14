import { Slot } from "expo-router";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect} from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
}
