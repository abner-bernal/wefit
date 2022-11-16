import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";

export function LinkFilled() {
  const { colors } = useTheme();

  return (
    <Svg
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
    >
      <Path
        fill={colors.primary}
        d="M4.4 12c0-1.71 1.39-3.1 3.1-3.1h4V7h-4c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9h-4c-1.71 0-3.1-1.39-3.1-3.1zm4.1 1h8v-2h-8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
      />
    </Svg>
  );
}