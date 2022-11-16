import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";

type Props = {
  color?: string;
}

export function StarRate({ color }: Props) {
  const { colors } = useTheme();
  
  return (
    <Svg
      width='20'
      height='20'
      fill='none'
      viewBox='0 0 20 20'
    >
      <Path
        fill={color ? color : colors.secondary}
        d='M12.025 8.333L10 1.667 7.975 8.333H1.667l5.15 3.675-1.959 6.325L10 14.425l5.15 3.908-1.958-6.325 5.141-3.675h-6.308z'
      />
    </Svg>
  );
}