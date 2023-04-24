import { View, TouchableWithoutFeedback } from "react-native";
import Animated, { SlideInRight, SlideOutRight } from "react-native-reanimated";
import Search from "../../assets/icons/Search";

export default function SearchIcon({ initialRender, setSearchActive, style }) {
  return (
    <Animated.View
      entering={initialRender ? null : SlideInRight}
      exiting={SlideOutRight}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          setSearchActive(true);
        }}
      >
        <View>
          <Search style={style} />
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
}
