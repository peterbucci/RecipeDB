import { Text, View } from "react-native";
import { styles } from "./styles/steps";

export default function Steps({ steps }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Instructions</Text>
      <View style={styles.list}>
        {steps.map((step, i) => (
          <View
            key={step.id}
            style={{ ...styles.item, ...(i === 0 ? styles.itemNoMargin : {}) }}
          >
            <Text style={styles.subheader}>Step {step.step}</Text>
            <Text style={styles.details}>{step.details}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
