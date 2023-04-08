import { View, TouchableWithoutFeedback } from "react-native";
import Animated, { SlideInLeft, SlideOutLeft } from "react-native-reanimated";
import Back from "../../assets/icons/Back";

export default function BackIcon({ setSearchActive, style }) {
  return (
    <Animated.View entering={SlideInLeft} exiting={SlideOutLeft}>
      <TouchableWithoutFeedback
        onPress={() => {
          setSearchActive(false);
        }}
      >
        <View>
          <Back style={style} />
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
}
