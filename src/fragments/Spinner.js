import { useCallback, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";

export default function Spinner() {
  const [render, setRender] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const startAnimation = useCallback(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });
  }, [spinValue]);

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
      startAnimation();
    }, 5000);
  }, [startAnimation]);

  return (
    <View style={styles.container}>
      {render && (
        <Animated.View
          style={[styles.spinner, { transform: [{ rotate }] }]}
        ></Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    borderWidth: 16,
    borderColor: "#f3f3f3",
    borderTopWidth: 16,
    borderTopColor: "#3498db",
    borderRadius: 60,
    width: 120,
    height: 120,
  },
});
