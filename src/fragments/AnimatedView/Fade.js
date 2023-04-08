import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const FadeInAnimation = new FadeIn().build();
const FadeOutAnimation = new FadeOut().build();

export default function Fade({ children, style }) {
  const customExitingAnimation = (values) => {
    "worklet";
    return FadeOutAnimation(values);
  };

  const customEnterAnimation = (values) => {
    "worklet";
    return FadeInAnimation(values);
  };

  return (
    <Animated.View
      entering={customEnterAnimation}
      exiting={customExitingAnimation}
      style={style}
    >
      {children}
    </Animated.View>
  );
}
