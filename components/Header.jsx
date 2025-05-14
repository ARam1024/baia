import { View, Image} from "react-native";

const logo = require("../assets/Vector.png");

export function Header() {
  return(
    <View style={styles.container}>
      <Image recourse={logo} />
      <Button></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FD769F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});