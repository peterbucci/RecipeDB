import { registerRootComponent } from "expo";
import { Text, View } from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "~/pages/Home";
import Recipe from "~/pages/Recipe/";

import { useFonts } from "expo-font";
import AddARecipe from "./pages/AddARecipe";
import Header from "./fragments/Header";
import { useState } from "react";
import Menu from "./fragments/Menu";
import Constants from "expo-constants";

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

const screenOptions = {
  presentation: "modal",
  animationTypeForReplace: "push",
  animation: "slide_from_bottom",
};

function App() {
  const navigationRef = useNavigationContainerRef();
  const [menuActive, setMenuActive] = useState(false);
  const [fontsLoaded] = useFonts({
    "Noticia Text": require("./assets/fonts/NoticiaText-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider style={{ marginTop: Constants.statusBarHeight }}>
      <Header navigation={navigationRef} setMenuActive={setMenuActive} />
      <NavigationContainer
        ref={navigationRef}
        linking={linking}
        fallback={<Text>Loading...</Text>}
      >
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} options={screenOptions} />
          <Stack.Screen
            name="Recipe"
            component={Recipe}
            options={screenOptions}
          />
          <Stack.Screen
            name="AddARecipe"
            component={AddARecipe}
            options={screenOptions}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
      {menuActive && (
        <Menu navigation={navigationRef} setActive={setMenuActive} />
      )}
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
