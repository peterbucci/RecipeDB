import { View, TouchableWithoutFeedback } from "react-native";
import Animated, { SlideInLeft, SlideOutLeft } from "react-native-reanimated";
import Menu from "../../assets/icons/Menu";

export default function MenuIcon({ initialRender, style, setMenuActive }) {
  return (
    <Animated.View
      entering={initialRender ? null : SlideInLeft}
      exiting={SlideOutLeft}
    >
      <TouchableWithoutFeedback onPress={() => setMenuActive((prev) => !prev)}>
        <View>
          <Menu style={style} />
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
}
