import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import HomePage from "./SRC/components/home";
import { useFonts } from "expo-font";
import { Platform } from "react-native";
import Header from "./SRC/components/Header";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

export default function App() {
  let [fontLoaded] = useFonts({
    // OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <Stack.Navigator initialRouteName="Globmantics">
          <Stack.Screen
            name="Globamantics"
            component={HomePage}
            options={{
              header: () => <Header headerDisplay="Globalmantics" />,
              headerMode: "screen", // Adjust this line according to your preference
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
