import { View, Text } from "react-native";
import { colors } from "../../styles/colors";

export function Home() {
  return(
    <View style={{flex:1, backgroundColor: colors.white_25}}>
      <Text>Home</Text>
    </View>
  )
}