import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useCallback, useEffect } from "react";
import { FlatList } from "react-native";

import Repository, { RepositoryProps } from "../../components/Repository";
import { RootTabParams } from "../../routes/tab.routes";
import { Header } from "../../components/Header";
import { useAppData } from "../../hooks/appData";

import * as S from "./styles";

type Props = BottomTabScreenProps<RootTabParams>;

type renderItemProps = {
  item: RepositoryProps;
};

export function Favorites({ navigation }: Props) {
  const { favorites, loading, loadFavorites } = useAppData();

  const renderItem = useCallback(({item}: renderItemProps) => {
    return <Repository data={item} />
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadFavorites();
    });

    return unsubscribe;
  }, [navigation]);

  return(
    <S.Container>
      <Header />
      {
        !favorites[0] ?
          <S.InfoContainer>
            <S.InfoLabel>Nenhum Repositório Favorito :(</S.InfoLabel>
          </S.InfoContainer>
        :
          <FlatList
            data={favorites}
            refreshing={loading}
            initialNumToRender={8}
            renderItem={renderItem}
            onRefresh={loadFavorites}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 16}}
          />
      }
    </S.Container>
  );
}