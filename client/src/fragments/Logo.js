import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import ChefsHat from "../assets/icons/ChefsHat";

export default function Logo({ navigation, additionalStyle = {} }) {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
      <View style={{ ...styles.logo, ...additionalStyle }}>
        <ChefsHat style={styles.logoIcon} />
        <Text style={styles.logoText}>
          recipe<Text style={styles.logoTextTwo}>db</Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginLeft: 10,
    cursor: "pointer",
  },
  logoText: {
    color: "#ffffff",
    fontSize: 28,
    fontFamily: "Noticia Text",
  },
  logoTextTwo: {
    color: "#9DC08B",
  },
  logoIcon: {
    marginRight: 1,
    height: 30,
    width: 30,
    color: "#609966",
  },
});
