import { Text, View } from "react-native";
import { styles } from "./styles/notes";

export default function Notes({ notes }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notes</Text>
      {notes.map((note, i) => (
        <View
          key={note.id}
          style={{ ...styles.item, ...(i === 0 ? styles.itemNoMargin : {}) }}
        >
          <Text style={styles.details}>{note.details}</Text>
        </View>
      ))}
    </View>
  );
}
