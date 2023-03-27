import { ScrollView, StyleSheet, Text, View } from "react-native";
import Menu from "../assets/icons/Menu";
import ChefsHat from "../assets/icons/ChefsHat";
import Constants from "expo-constants";

export default function ScrollViewWrapper({ children }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      stickyHeaderIndices={[0]}
    >
      <View>
        <View style={styles.header}>
          <Menu style={styles.menuIcon} />
          <View style={styles.logo}>
            <ChefsHat style={styles.logoIcon} />
            <Text style={styles.logoText}>
              recipe<Text style={styles.logoTextTwo}>db</Text>
            </Text>
          </View>
        </View>
      </View>
      {children}
      <View style={styles.footer}>
        <View style={styles.logo}>
          <ChefsHat style={styles.logoIcon} />
          <Text style={styles.logoText}>
            recipe<Text style={styles.logoTextTwo}>db</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    backgroundColor: "#40513B",
  },
  menuIcon: {
    marginLeft: 10,
    width: 32,
    height: 32,
    color: "#ffffff",
    cursor: "pointer",
  },
  logo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 50,
    marginLeft: 10,
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
  footer: {
    height: 100,
    backgroundColor: "#40513B",
  },
});
