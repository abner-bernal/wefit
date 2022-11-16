import Svg, { Path } from "react-native-svg";

export function ArrowLeft() {
  return (
    <Svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill="#fff"
        d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414L7.828 11z"
      />
    </Svg>
  );
}