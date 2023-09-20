import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { navigate } from "./rootNavigation";


export default function Footer() {
  return (
    <View style={StyleSheet.footer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("Globalmantics")}
      >
        <Text>HomePage</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("Globalmantics")}
      >
        <Text>About</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Globalmantics")}
        >
          <Text>Qoute Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Globalmantics")}
        >
          <Text>catalog</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 80, 
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    button: {
        padding: 20
    }
})