import { View, Text } from "react-native";
import { styles } from "./styles/description";

export default function Description({ text }) {
  return (
    <View style={styles.description}>
      <Text>{text}</Text>
    </View>
  );
}
