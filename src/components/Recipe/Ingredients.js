import { Text, View } from "react-native";
import { styles } from "./styles/ingredients";

export default function Ingredients({ ingredients }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ingredients</Text>
      <View style={styles.list}>
        {ingredients.map(
          (
            {
              id,
              amount,
              unitOfMeasure,
              unitOfMeasurePlural,
              unitOfMeasureAbbr,
              name,
              plural,
            },
            i
          ) => {
            const measurement = unitOfMeasureAbbr
              ? unitOfMeasureAbbr
              : amount > 1
              ? unitOfMeasurePlural
              : unitOfMeasure;
            const ingredient = !measurement && amount > 1 ? plural : name;
            return (
              <View
                key={id}
                style={{
                  ...styles.item,
                  ...(i === 0 ? styles.itemNoMargin : {}),
                }}
              >
                <Text style={styles.itemText}>{amount}</Text>
                {measurement && (
                  <Text style={styles.itemText}>
                    {measurement.toLowerCase()}
                  </Text>
                )}
                <Text style={styles.itemText}>{ingredient}</Text>
              </View>
            );
          }
        )}
      </View>
    </View>
  );
}
