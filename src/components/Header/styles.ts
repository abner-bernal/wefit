import styled, { css } from "styled-components/native";
import Constants from 'expo-constants';

export const Container = styled.View`
  ${({theme}) => css`
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    height: ${Constants.statusBarHeight + 56}px;
    padding: ${Constants.statusBarHeight}px 0 0 16px;
    background-color: ${theme.colors.secondaryBackground};
  `}
`;

export const Title = styled.Text`
  ${({theme}) =>  css`
    font-size: 20px;
    font-weight: 500;
    align-self: center;
    letter-spacing: 0.15px;
    color: ${theme.colors.heading90};
  `}
`;

export const SettingsButton = styled.Pressable`
  padding: 0 20px;
  justify-content: center;
`;