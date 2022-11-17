import styled, { css } from 'styled-components/native';

export const PressableContainer = styled.Pressable`
  ${({theme}) =>  css`
    background-color: ${theme.colors.secondaryBackground};
    box-shadow: 0 0 4px ${theme.colors.boxShadow};
    margin: 16px 16px 0;
    padding: 12px 16px;
    border-radius: 4px;
  `}
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const FullName = styled.Text`
 ${({theme}) =>  css`
  color: ${theme.colors.heading100};
  font-weight: 700;
  font-size: 12px;
  `}
`;

export const Avatar = styled.Image`
  ${({theme}) =>  css`
    background-color: ${theme.colors.primaryBackground};
    border-radius: 14.5px;
    height: 29px;
    width: 29px;
  `}
`;

export const Line = styled.View`
  ${({theme}) =>  css`
    background-color: ${theme.colors.line};
    margin: 16px 0;
    height: 1px;
  `}
`;

export const Description = styled.Text`
  ${({theme}) =>  css`
    color: ${theme.colors.text};
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 12px;
  `}
`;

export const Footer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const FavoriteButton = styled.Pressable`
  ${({theme}) =>  css`
    background-color: ${theme.colors.secondary50};
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
    padding: 8px 10px;
  `}
`;

export const FavoriteLabel = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.secondary};
    margin-left: 10px;
    font-weight: 700;
    font-size: 12px;
  `}
`;

export const FooterFrame = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TagLanguage = styled.View`
  ${({theme}) =>  css`
    background-color: ${theme.colors.tertiary};
    border-radius: 4px;
    height: 8px;
    width: 8px;
  `}
`;

export const Label = styled.Text`
  ${({theme}) =>  css`
    color: ${theme.colors.text};
    margin-left: 6px;
    font-weight: 400;
    font-size: 12px;
  `}
`;
