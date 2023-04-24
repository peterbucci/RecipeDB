import { View, Text } from "react-native";
import Photo from "~/components/Recipe/Photo";
import Description from "./Description";
import Ingredients from "~/components/Recipe/Ingredients";
import Steps from "~/components/Recipe/Steps";
import Notes from "../../components/Recipe/Notes";
import NoRecipeFound from "~/components/Recipe/NoRecipeFound";
import MailIcon from "~/assets/icons/Mail";
import TwitterIcon from "~/assets/icons/Twitter";
import SaveIcon from "~/assets/icons/Save";
import { styles } from "./styles/recipe";

export default function RecipeLayout({ children, recipe }) {
  const date = new Date(recipe.createdOn);
  return (
    <View style={styles.container}>
      <Text style={styles.recipeName}>{recipe.name}</Text>
      <Text style={styles.byline}>
        By {recipe.firstName} {recipe.lastName}
      </Text>
      <Text style={styles.createdOn}>
        {date.toLocaleString("default", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Text>
      <View style={styles.shareIcons}>
        <View style={styles.shareIconWrapper}>
          <MailIcon style={styles.shareIcon} />
        </View>
        <View style={styles.shareIconWrapper}>
          <TwitterIcon style={styles.shareIcon} />
        </View>
        <View style={styles.shareIconWrapper}>
          <SaveIcon style={styles.shareIcon} />
        </View>
      </View>
      {children}
    </View>
  );
}

RecipeLayout.Photo = (props) => <Photo {...props} />;
RecipeLayout.Description = (props) => <Description {...props} />;
RecipeLayout.Ingredients = (props) => <Ingredients {...props} />;
RecipeLayout.Steps = (props) => <Steps {...props} />;
RecipeLayout.Notes = (props) => <Notes {...props} />;
RecipeLayout.NoRecipeFound = (props) => <NoRecipeFound {...props} />;
