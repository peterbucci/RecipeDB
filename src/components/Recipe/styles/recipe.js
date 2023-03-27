import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  recipeName: {
    marginTop: 20,
    marginBottom: 20,
    fontFamily: "Noticia Text",
    fontSize: 32,
  },
  byline: {
    fontSize: 14,
    textTransform: "uppercase",
  },
  createdOn: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 12,
    color: "#aaaaaa",
  },
  shareIcons: {
    flexDirection: "row",
    marginBottom: 30,
  },
  shareIconWrapper: {
    marginHorizontal: 5,
    padding: 5,
    backgroundColor: "#40513B",
    borderRadius: 15,
    cursor: "pointer",
  },
  shareIcon: {
    width: 20,
    height: 20,
    color: "#ffffff",
  },
});
