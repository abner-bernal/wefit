import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { removeFavorite, saveFavorite } from '../../utils/favorite';
import { FavoriteButton } from '../../components/FavoriteButton';
import { RepositoryProps } from '../../components/Repository';
import { LinkFilled } from '../../icons/LinkFilled';
import { ArrowLeft } from '../../icons/ArrowLeft';
import { RootAppParams } from '../../routes';

import * as S from './styles';

type Props = NativeStackScreenProps<RootAppParams>;

type Params = {
  repositorySelected: RepositoryProps;
}

export function RepositoryDetails({ navigation: { goBack }, route }: Props) {
  const { repositorySelected, repositorySelected : {
    id,
    fullName, 
    description, 
    language,
    htmlUrl,
    favorite
  }} = route.params as Params;

  const [isFavorite, setIsFavorite] = useState(favorite);

  const handlePressFavorite = () => {
    isFavorite ? removeFavorite(id) : saveFavorite(repositorySelected);
    setIsFavorite(!isFavorite);
  }

  return(
    <S.Container>
      <StatusBar style="inverted" animated/>
      <S.Header>
        <S.IconButton onPress={() => goBack()} >
          <ArrowLeft />
        </S.IconButton>
        <S.HeaderTitle>Detalhes</S.HeaderTitle>
      </S.Header>
      <S.Content>
        <S.Title>{ fullName }</S.Title>
        { 
          description && 
          <S.Description>{ description }</S.Description> 
        }
        {
          language && 
          <S.Frame>
            <S.TagLanguage />
            <S.Language>{ language }</S.Language>
          </S.Frame>
        }
      </S.Content>
      <S.Footer>
        <S.FooterContent>
          <S.RepositoryButton url={htmlUrl}>
            <S.LinkLabel>Ver Repositório</S.LinkLabel>
            <LinkFilled />
          </S.RepositoryButton>
          <FavoriteButton 
            isFavorite={isFavorite} 
            onPress={handlePressFavorite}
          />
        </S.FooterContent>
      </S.Footer>
    </S.Container>
  )
}