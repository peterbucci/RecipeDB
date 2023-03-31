import { View, Text } from "react-native";
import { styles } from "./styles/description";

export default function Description({ description }) {
  return (
    <View style={styles.description}>
      <Text>{description}</Text>
    </View>
  );
}
