import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";

export function ArrowLeft() {
  const { colors } = useTheme();
  
  return (
    <Svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={colors.invertedHeading100}
        d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414L7.828 11z"
      />
    </Svg>
  );
}