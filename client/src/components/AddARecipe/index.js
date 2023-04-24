import { Button, Text, View } from "react-native";
import SlideInHorizontal from "../../fragments/AnimatedView/SlideInHorizontal";
import { styles } from "./styles/add_a_recipe";

export default function AddARecipeComponent({ children }) {
  return <View style={styles.container}>{children}</View>;
}

AddARecipeComponent.Header = ({
  currentSection,
  buttonOnPress,
  buttonDisabled,
}) => {
  const disabledLeft = buttonDisabled("left");
  const disabledRight = buttonDisabled("right");
  return (
    <View style={styles.header}>
      <Button
        title="<"
        color="#40513B"
        accessibilityLabel="Previous Section"
        disabled={disabledLeft}
        onPress={() => buttonOnPress("left")}
      />
      <Text style={styles.headerText}>{currentSection}</Text>
      <Button
        title=">"
        color="#40513B"
        accessibilityLabel="Next Section"
        disabled={disabledRight}
        onPress={() => buttonOnPress("right")}
      />
    </View>
  );
};

AddARecipeComponent.Body = ({ children, enterDirection }) => {
  return (
    <SlideInHorizontal enterDirection={enterDirection} style={styles.section}>
      {children}
    </SlideInHorizontal>
  );
};

AddARecipeComponent.Footer = ({ onSubmit, onClear }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.buttonWrapper}>
        <Button
          title="Create"
          color="#40513B"
          accessibilityLabel="Create Recipe"
          onPress={onSubmit}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Clear"
          color="#40513B"
          accessibilityLabel="Clear Recipe"
          onPress={onClear}
        />
      </View>
    </View>
  );
};
