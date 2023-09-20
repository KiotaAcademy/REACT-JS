import { StyleSheet, Text, View } from "react-native";
import logo from "../../assets/icon.png";
export default function Header(props) {
  return (
    <View style={StyleSheet.header}>
      {/* <Image source={logo} style={{ width: 35, height: 35 }} /> */}
      <View>
        <Text style={StyleSheet.text}>{props.headerDisplay}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "OpenSans",
  },
});
