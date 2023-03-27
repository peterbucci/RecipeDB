import { registerRootComponent } from "expo";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Home from "~/pages/Home";
import Recipe from "~/pages/Recipe/";

import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

const config = {
  screens: {
    Home: "/",
    Recipe: "/recipe/:recipeId",
  },
};

const linking = {
  prefixes: ["http://192.168.1.165:19006/"],
  config,
};

function App() {
  const [fontsLoaded] = useFonts({
    "Noticia Text": require("./assets/fonts/NoticiaText-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Recipe" component={Recipe} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

registerRootComponent(App);
