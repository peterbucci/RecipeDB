import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  item: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  image: {
    flex: 1,
    marginRight: 10,
    height: undefined,
    maxHeight: 200,
    aspectRatio: 1,
  },
  itemRight: {
    flex: 2,
  },
  recipeName: {
    fontFamily: "Noticia Text",
    fontSize: 22,
  },
  pagination: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    margin: 10,
  },
});
