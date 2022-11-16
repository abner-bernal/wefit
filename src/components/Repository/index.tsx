import { NavigationProp, useNavigation } from "@react-navigation/native";
import { memo } from "react";

import { StarRate } from "../../icons/StarRate";
import { RootAppParams } from "../../routes";
import { saveFavorite } from "../../utils/favorite";

import * as S from './styles';

type NavigationAppProps = NavigationProp<RootAppParams>;

export type RepositoryProps = {
  id: string;
  htmlUrl: string;
  fullName: string;
  language: string;
  favorite: boolean;
  avatarUrl: string;
  description: string;
  stargazersCount: number;
};

type Props = {
  data: RepositoryProps;
  reloadRepositories?: () => void;
}

function Repository({ data, reloadRepositories }: Props) {
  const { navigate } = useNavigation<NavigationAppProps>();

  const handleRepositoryDetails = () => {
    navigate('RepositoryDetails', { repositorySelected: data });
  }

  const handleFavorite = () => {
    saveFavorite(data);
    reloadRepositories && reloadRepositories();
  }

  return(
    <S.PressableContainer onPress={handleRepositoryDetails}>
      <S.Header>
        <S.FullName>{ data.fullName }</S.FullName>
        <S.Avatar 
          source={{ uri: data.avatarUrl }}
        />
      </S.Header>
      <S.Line />
      {
        data.description && 
        <S.Description>{ data.description }</S.Description>
      }
      <S.Footer>
        {
          !data.favorite &&
          <S.FavoriteButton onPress={handleFavorite}>
            <StarRate />
            <S.FavoriteLabel>Favoritar</S.FavoriteLabel>
          </S.FavoriteButton>
        }
        <S.FooterFrame>
          <StarRate />
          <S.Label>{ data.stargazersCount }</S.Label>
        </S.FooterFrame>
        {
          data.language &&
          <S.FooterFrame>
            <S.TagLanguage />
            <S.Label>{ data.language }</S.Label>
          </S.FooterFrame>
        }
      </S.Footer>
    </S.PressableContainer>
  );
}

export default memo(Repository);