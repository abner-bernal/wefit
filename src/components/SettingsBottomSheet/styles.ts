import { BottomSheetTextInput, BottomSheetView } from "@gorhom/bottom-sheet";
import styled, { css } from "styled-components/native";
import Animated from "react-native-reanimated";
import { Pressable } from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Overlay = styled(AnimatedPressable)`
  ${({theme}) =>  css`
    background-color: ${theme.colors.overlay};
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  `}
`;

export const Content = styled(BottomSheetView)`
  padding: 0 16px 16px;
`;

export const Title = styled.Text`
  ${({theme}) =>  css`
    color: ${theme.colors.heading90};
    letter-spacing: 0.15px;
    font-weight: 400;
    font-size: 16px;
  `}
`;

export const InputContainer = styled.View`
  ${({theme}) =>  css`
    border-bottom-color: ${theme.colors.inputBorderBottom};
    background-color: ${theme.colors.inputBackground};
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    padding-top: 9px;
    margin-top: 10px;
  `}
`;

export const InputTitle = styled.Text`
  ${({theme}) =>  css`
    color: ${theme.colors.heading60};
    letter-spacing: 0.15px;
    margin-bottom: -12px;
    margin-left: 12px;
    font-weight: 400;
    font-size: 12px;
  `}
`;

export const Input = styled(BottomSheetTextInput)`
  ${({theme}) =>  css`
    color: ${theme.colors.heading90};
    letter-spacing: 0.15px;
    padding: 16px 12px 9px;
    font-weight: 400;
    font-size: 16px;
  `}
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

const Button = styled.Pressable`
  align-items: center;
  border-radius: 4px;
  padding: 10px 0;
  flex: 1;
`;

export const CancelButton = styled(Button)`
  margin-right: 5px;
`;

const ButtonLabel = styled.Text`
  text-transform: uppercase;
  letter-spacing: 0.15px;
  font-weight: 500;
  font-size: 15px;
`;

export const CancelLabel = styled(ButtonLabel)`
  ${({theme}) =>  css`
    color: ${theme.colors.primary};
  `}
`;

export const SaveButton = styled(Button)`
  ${({theme}) =>  css`
    background-color: ${theme.colors.primary};
    margin-left: 5px;
  `}
`;

export const SaveLabel = styled(ButtonLabel)`
  ${({theme}) =>  css`
    color: ${theme.colors.invertedHeading100};
  `}
`;