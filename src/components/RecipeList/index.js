import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles";

export default function RecipeList({ children }) {
  return <View style={styles.container}>{children}</View>;
}

RecipeList.Item = ({ recipe, description, imageUri, handleRecipePress }) => {
  return (
    <View key={recipe.id} style={styles.item}>
      {recipe.source && (
        <Image source={{ uri: imageUri }} style={styles.image} />
      )}
      <View style={styles.itemRight}>
        <Text style={styles.text}>Recipes</Text>
        <TouchableWithoutFeedback onPress={() => handleRecipePress(recipe.id)}>
          <Text style={styles.recipeName}>{recipe.name}</Text>
        </TouchableWithoutFeedback>
        <Text style={styles.text}>{description}...</Text>
      </View>
    </View>
  );
};

RecipeList.Pagination = ({ page, totalPages, setPage }) => {
  return (
    <View style={styles.pagination}>
      {page > 0 && (
        <Text style={styles.paginationText} onPress={() => setPage(page - 1)}>
          Previous
        </Text>
      )}
      <Text style={styles.paginationText}>
        {page + 1} of {totalPages}
      </Text>
      {page < totalPages - 1 && (
        <Text style={styles.paginationText} onPress={() => setPage(page + 1)}>
          Next
        </Text>
      )}
    </View>
  );
};
