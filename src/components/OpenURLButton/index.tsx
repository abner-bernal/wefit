import { Alert, Linking, Pressable, PressableProps } from "react-native";
import { ReactNode, useCallback } from "react";

type Props = PressableProps & {
  url: string;
  children?: ReactNode;
}
export function OpenURLButton({ url, children, ...rest }: Props) {

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Não é possível abrir este URL: ${url}`);
    }
  }, [url]);

  return <Pressable children={children} onPress={handlePress} {...rest}/>;
};
