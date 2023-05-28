import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import ComicsListScreen from "./screens/ComicListScreen";
import ComicsDetailScreen from "./screens/ComicDetailScreen";

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Comics" component={ComicsListScreen} />
        <Stack.Screen name="Details" component={ComicsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
