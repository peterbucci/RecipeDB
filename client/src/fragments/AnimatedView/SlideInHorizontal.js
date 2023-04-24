import Animated, {
  SlideInRight,
  SlideInLeft,
  SlideOutRight,
  SlideOutLeft,
} from "react-native-reanimated";

const slideOutLeftAnimation = new SlideOutLeft().build();
const slideOutRightAnimation = new SlideOutRight().build();
const slideInLeftAnimation = new SlideInLeft().build();
const slideInRightAnimation = new SlideInRight().build();

export default function SlideInHorizontal({ children, enterDirection, style }) {
  const customExitingAnimation = (values) => {
    "worklet";

    return enterDirection.value === "right"
      ? slideOutLeftAnimation(values)
      : slideOutRightAnimation(values);
  };

  const customEnterAnimation = (values) => {
    "worklet";

    return enterDirection.value === "left"
      ? slideInLeftAnimation(values)
      : slideInRightAnimation(values);
  };

  return (
    <Animated.View
      entering={enterDirection.value ? customEnterAnimation : null}
      exiting={customExitingAnimation}
      style={style}
    >
      {children}
    </Animated.View>
  );
}
