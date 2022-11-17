import styled, { css } from "styled-components/native";
import Constants from 'expo-constants';

export const Container = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.secondaryBackground};
    padding: ${Constants.statusBarHeight}px 0 0 16px;
    height: ${Constants.statusBarHeight + 56}px;
    justify-content: space-between;
    flex-direction: row;
  `}
`;

export const Title = styled.Text`
  ${({theme}) =>  css`
    color: ${theme.colors.heading90};
    letter-spacing: 0.15px;
    align-self: center;
    font-weight: 500;
    font-size: 20px;
  `}
`;

export const SettingsButton = styled.Pressable`
  justify-content: center;
  padding: 0 20px;
  background-color: red;
`;