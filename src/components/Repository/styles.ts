import styled, { css } from 'styled-components/native';

export const PressableContainer = styled.Pressable`
  ${({theme}) =>  css`
    padding: 12px 16px;
    margin: 16px 16px 0;
    border-radius: 4px;
    box-shadow: 0 0 4px ${theme.colors.boxShadow};
    background-color: ${theme.colors.secondaryBackground};
  `}
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const FullName = styled.Text`
 ${({theme}) =>  css`
    font-size: 12px;
    font-weight: 700;
    color: ${theme.colors.heading100};
  `}
`;

export const Avatar = styled.Image`
  ${({theme}) =>  css`
    width: 29px;
    height: 29px;
    border-radius: 14.5px;
    background-color: ${theme.colors.primaryBackground};
  `}
`;

export const Line = styled.View`
  ${({theme}) =>  css`
    height: 1px;
    margin: 16px 0;
    background-color: ${theme.colors.line};
  `}
`;

export const Description = styled.Text`
  ${({theme}) =>  css`
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 16px;
    color: ${theme.colors.text};
  `}
`;

export const Footer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const FavoriteButton = styled.Pressable`
  ${({theme}) =>  css`
    padding: 8px 10px;
    border-radius: 4px;
    align-items: center;
    flex-direction: row;
    background-color: ${theme.colors.secondary50};
  `}
`;

export const FavoriteLabel = styled.Text`
  ${({theme}) => css`
    font-size: 12px;
    font-weight: 700;
    margin-left: 10px;
    color: ${theme.colors.secondary};
  `}
`;

export const FooterFrame = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TagLanguage = styled.View`
  ${({theme}) =>  css`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${theme.colors.tertiary};
  `}
`;

export const Label = styled.Text`
  ${({theme}) =>  css`
    font-size: 12px;
    font-weight: 400;
    margin-left: 6px;
    color: ${theme.colors.text};
  `}
`;
