import styled, { css } from "styled-components/native";

type PressableContainerProps = {
  isFavorite: boolean;
}

export const PressableContainer = styled.Pressable<PressableContainerProps>`
  justify-content: center;
  flex-direction: row;
  border-style: solid;
  align-items: center;
  border-radius: 4px;
  border-width: 1px;
  padding: 8px 22px;

  ${({theme, isFavorite}) =>  isFavorite 
    ? css`
      border-color: ${theme.colors.highlight};
    `
    : css`
      box-shadow: 0px 2px 2px ${theme.colors.boxShadow};
      background-color: ${theme.colors.secondary};
      border-color: transparent;
    `
  }
`;

export const Title = styled.Text`
  ${({theme}) =>  css`
    color: ${theme.colors.highlight};
    text-transform: uppercase;
    margin-right: 8px;
    font-weight: 500;
    font-size: 15px;
  `}
`;