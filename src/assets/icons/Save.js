import Svg, { Path } from "react-native-svg";

export default function SaveIcon({ style }) {
  return (
    <Svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17a1 1 0 0 1-1.581.814L12 17.229l-6.419 4.585A1 1 0 0 1 4 21V4zm14 0H6v15.057l5.419-3.87a1 1 0 0 1 1.162 0L18 19.056V4z"
        fill="currentColor"
      />
    </Svg>
  );
}
