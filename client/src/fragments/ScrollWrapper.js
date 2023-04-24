import { ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Header from "./Header";
import Logo from "./Logo";
import { useState } from "react";
import Menu from "./Menu";

export default function ScrollViewWrapper({ children, navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {children}
      <View style={styles.footer}>
        <Logo navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    height: 100,
    backgroundColor: "#40513B",
  },
});
