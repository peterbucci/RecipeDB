import { View, StyleSheet, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Recipe 2"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Recipe", {
            recipeId: 2,
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
