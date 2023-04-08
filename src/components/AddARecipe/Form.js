import { Text, View, TextInput } from "react-native";
import { styles } from "./styles/form";

export default function TextInputComponent({
  label,
  value,
  onChangeText,
  numberOfLines,
}) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{label}</Text>
      <TextInput
        style={{
          ...styles.textInput,
          ...(numberOfLines ? styles.textInputMultiline : {}),
        }}
        onChangeText={(value) => onChangeText(value)}
        value={value}
        multiline={numberOfLines ? true : false}
        numberOfLines={numberOfLines}
      />
    </View>
  );
}
