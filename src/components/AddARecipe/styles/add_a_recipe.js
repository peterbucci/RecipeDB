import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    backgroundColor: "#9DC08B",
  },
  headerText: {
    fontSize: 20,
    color: "#ffffff",
  },
  section: {
    flex: 1,
    paddingVertical: 10,
  },
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
    ...{},
  },
  textInputMultiline: {
    textAlignVertical: "top",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  buttonWrapper: { flex: 1, marginHorizontal: 5 },
});
