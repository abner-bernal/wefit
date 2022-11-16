import styled, { css } from "styled-components/native";

type PressableContainerProps = {
  isFavorite: boolean;
}

export const PressableContainer = styled.Pressable<PressableContainerProps>`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-radius: 4px;
  border-width: 1px;
  padding: 8px 22px;

  ${({theme, isFavorite}) =>  isFavorite 
    ? css`
      border-color: ${theme.colors.highlight};
    `
    : css`
      border-color: transparent;
      background-color: ${theme.colors.secondary};
      box-shadow: 0px 2px 2px ${theme.colors.boxShadow};
    `
  }
`;

export const Title = styled.Text`
  ${({theme}) =>  css`
    font-size: 15px;
    font-weight: 500;
    margin-right: 8px;
    text-transform: uppercase;
    color: ${theme.colors.highlight};
  `}
`;