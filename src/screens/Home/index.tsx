import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { VirtualizedList } from "react-native";

import Repository, { RepositoryProps } from "../../components/Repository";
import { COLLECTION_FAVORITES } from "../../configs/database";
import { RootAppParams } from "../../routes";
import { api } from "../../services/api";

import * as S from "./styles";
import { Header } from "../../components/Header";

type HomeProps = NativeStackScreenProps<RootAppParams>;

type renderItemProps = {
  item: RepositoryProps;
};

export function Home({ navigation }: HomeProps) {
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [loading, setLoading] = useState(true);

  const user = 'abner-bernal';

  const loadRepositories = async () => {
    try {
      setLoading(true);
      const responseData = await api.get(`/users/${user}/repos`);
      const storage = await AsyncStorage.getItem(COLLECTION_FAVORITES);
      const favorites = storage ? JSON.parse(storage) : [];

      const repositoriesData: RepositoryProps[] = responseData.data.reduce(
        (result: RepositoryProps[], item: any) => {
          const foundRepository: RepositoryProps = favorites.find(
            (repository: RepositoryProps) => repository.id === item.id
          );

          const isFavorite = foundRepository !== undefined;

          if(!isFavorite) {
            result.push({
              id: item.id,
              htmlUrl: item.html_url,
              language: item.language,
              fullName: item.full_name,
              description: item.description,
              avatarUrl: item.owner.avatar_url,
              stargazersCount: item.stargazers_count,
              favorite: isFavorite,
            });
          }
          return result;
        }, []
      );
      
      setRepositories(repositoriesData);
    } catch {
      throw new Error('Não foi possível carregar os repositórios');
    } finally {
      setLoading(false);
    }
  }
  
  const renderItem = useCallback(({item}: renderItemProps) => {
    return <Repository data={item} reloadRepositories={loadRepositories}/>
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadRepositories();
    });

    return unsubscribe;
  }, [navigation]);

  return(
    <S.Container>
      <Header />
      <VirtualizedList
        data={repositories}
        refreshing={loading}
        initialNumToRender={8}
        renderItem={renderItem}
        onRefresh={loadRepositories}
        keyExtractor={item => item.id}
        getItemCount={data => data.length}
        showsVerticalScrollIndicator={false}
        getItem={(data, index) => data[index]}
        contentContainerStyle={{paddingBottom: 16}}
      />
    </S.Container>
  );
}