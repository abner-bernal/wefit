import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";

import Repository, { RepositoryProps } from "../../components/Repository";
import { COLLECTION_FAVORITES } from "../../configs/database";
import { RootAppParams } from "../../routes";

import * as S from "./styles";
import { Header } from "../../components/Header";

type Props = NativeStackScreenProps<RootAppParams>;

type renderItemProps = {
  item: RepositoryProps;
};

export function Favorites({ navigation }: Props) {
  const [favorites, setFavorites] = useState<RepositoryProps[]>([]);
  const [loading, setLoading] = useState(true);

  const loadFavorites = async () => {
    try {
      setLoading(true);
      const storage = await AsyncStorage.getItem(COLLECTION_FAVORITES);

      if(storage) {
        const favorites = JSON.parse(storage);      
        setFavorites(favorites);
      }
      
    } catch {
      throw new Error('Não foi possível carregar os favoritos');
    } finally {
      setLoading(false);
    }
  }

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
    </S.Container>
  );
}