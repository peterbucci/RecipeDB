import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import SearchBarComponent from "../SearchBar";
import Fade from "../AnimatedView/Fade";
import Logo from "../Logo";
import BackIcon from "./BackIcon";
import SearchIcon from "./SearchIcon";
import MenuIcon from "./MenuIcon";

export default function Header({ navigation, setMenuActive }) {
  const [initialRender, setInitialRender] = useState(true);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    setInitialRender(false);
  }, []);

  return (
    <View style={styles.header}>
      {searchActive ? (
        <Fade style={styles.headerTransition} key="search">
          <BackIcon
            setSearchActive={setSearchActive}
            style={styles.smallIcon}
          />
          <SearchBarComponent />
        </Fade>
      ) : (
        <Fade style={styles.headerTransition} key="logo">
          <MenuIcon
            initialRender={initialRender}
            style={styles.largeIcon}
            setMenuActive={setMenuActive}
          />
          <Logo navigation={navigation} additionalStyle={styles.logoHeader} />
          <SearchIcon
            initialRender={initialRender}
            setSearchActive={setSearchActive}
            style={styles.smallIcon}
          />
        </Fade>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: "#40513B",
  },
  headerTransition: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  largeIcon: {
    width: 32,
    height: 32,
    color: "#ffffff",
    cursor: "pointer",
  },
  smallIcon: {
    width: 24,
    height: 24,
    color: "#ffffff",
    cursor: "pointer",
  },
});
