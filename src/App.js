import { registerRootComponent } from "expo";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "~/pages/Home";
import Recipe from "~/pages/Recipe/";

import { useFonts } from "expo-font";
import AddARecipe from "./pages/AddARecipe";

const Stack = createNativeStackNavigator();

const config = {
  screens: {
    Home: "/",
    Recipe: "/recipe/:recipeId",
    AddARecipe: "/recipe/add",
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
    <SafeAreaProvider>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Recipe" component={Recipe} />
          <Stack.Screen name="AddARecipe" component={AddARecipe} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
