import Svg, { Path } from "react-native-svg";

export default function Menu({ style }) {
  return (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M80 160h352M80 256h352M80 352h352"
      />
    </Svg>
  );
}
