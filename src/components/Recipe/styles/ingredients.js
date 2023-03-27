import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    marginVertical: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
  list: {
    padding: 20,
    backgroundColor: "#40513B",
    borderRadius: 10,
  },
  item: {
    flexDirection: "row",
    marginTop: 15,
  },
  itemNoMargin: {
    marginTop: 0,
  },
  itemText: {
    marginRight: 5,
    color: "#ffffff",
  },
});
