import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 5,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#999999",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  imageText: {
    marginTop: 5,
    fontSize: 12,
    color: "#999999",
  },
  description: {
    paddingVertical: 10,
  },
});
