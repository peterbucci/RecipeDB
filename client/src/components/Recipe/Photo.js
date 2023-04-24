import { View, Text, Image } from "react-native";
import { styles } from "./styles/photo";

export default function Photo({ source, description }) {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: "http://192.168.1.151:3000/uploads/images/" + source }}
        style={styles.image}
      />
      <Text style={styles.imageText}>{description}</Text>
    </View>
  );
}
