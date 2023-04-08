import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  textInputContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 5,
    borderBottomWidth: 2,
    borderColor: "#9DC08B",
    backgroundColor: "#ffffff",
  },
  textInputLabel: {
    fontSize: 12,
  },
  textInput: {
    ...Platform.select({
      web: {
        outlineWidth: 0,
      },
    }),
    ...{
      padding: 5,
    },
  },
  textInputMultiline: {
    textAlignVertical: "top",
  },
});
