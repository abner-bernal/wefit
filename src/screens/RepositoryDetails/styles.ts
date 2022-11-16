import { OpenURLButton } from '../../components/OpenURLButton';
import styled, { css } from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  ${({theme}) =>  css`
    background-color: ${theme.colors.invertedBackground};
    padding: ${Constants.statusBarHeight}px 16px 0;
    height: ${Constants.statusBarHeight + 56}px;
    flex-direction: row;
  `}
`;

export const IconButton = styled.Pressable`
  justify-content: center;
  padding: 0 12px;
`;

export const HeaderTitle = styled.Text`
  ${({theme}) =>  css`
    color: ${theme.colors.invertedHeading90};
    align-self: center;
    font-weight: 500;
    font-size: 20px;
  `}
`;

export const Content = styled.View`
  ${({theme}) =>  css`
    background-color: ${theme.colors.secondaryBackground};
    padding: 16px;
  `}
`;

export const Title = styled.Text`
  ${({theme}) =>  css`
    color: ${theme.colors.heading100};
    font-weight: 700;
    font-size: 20px;
  `}
`;

export const Description = styled.Text`
  ${({theme}) =>  css`
    color: ${theme.colors.text};
    font-weight: 400;
    margin-top: 16px;
    font-size: 16px;
  `}
`;

export const Frame = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
`;

export const TagLanguage = styled.View`
  ${({theme}) =>  css`
    background-color: ${theme.colors.tertiary};
    border-radius: 6px;
    height: 12px;
    width: 12px;
  `}
`;

export const Language = styled.Text`
  ${({theme}) =>  css`
    color: ${theme.colors.text};
    font-weight: 400;
    margin-left: 6px;
    font-size: 14px;
  `}
`;

export const Footer = styled.SafeAreaView`
  ${({theme}) =>  css`
    background-color: ${theme.colors.secondaryBackground};
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  `}
`;

export const FooterContent = styled.View`
  flex-direction: column;
  padding: 16px;
`;

export const RepositoryButton = styled(OpenURLButton)`
  justify-content: center;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  padding: 8px 11px;
`;

export const LinkLabel = styled.Text`
  ${({theme}) =>  css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    margin-right: 8px;
    font-weight: 500;
    font-size: 15px;
  `}
`;
