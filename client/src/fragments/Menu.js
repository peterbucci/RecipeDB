import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Constants from "expo-constants";
import Animated, { SlideInLeft, SlideOutLeft } from "react-native-reanimated";

export default function Menu({ navigation, setActive }) {
  return (
    <TouchableWithoutFeedback onPress={() => setActive((prev) => !prev)}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onTouchEnd={(e) => e.stopPropagation()}>
          <Animated.View
            entering={SlideInLeft}
            exiting={SlideOutLeft}
            style={styles.menu}
            onTouchEnd={(e) => {
              e.stopPropagation();
            }}
          >
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Text
                onPress={() => {
                  setActive(false);
                  navigation.navigate("AddARecipe");
                }}
              >
                Add A Recipe
              </Text>
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  menu: {
    flex: 0.7,
    maxWidth: 300,
    backgroundColor: "#ffffff",
  },
});
