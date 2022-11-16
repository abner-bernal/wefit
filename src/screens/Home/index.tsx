import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback, useEffect } from "react";
import { VirtualizedList } from "react-native";

import Repository, { RepositoryProps } from "../../components/Repository";
import { RootAppParams } from "../../routes";

import * as S from "./styles";

import { Header } from "../../components/Header";
import { useAppData } from "../../hooks/appData";
import { SettingsFilled } from "../../icons/SettingsFilled";

type HomeProps = NativeStackScreenProps<RootAppParams>;

type renderItemProps = {
  item: RepositoryProps;
};

export function Home({ navigation }: HomeProps) {
  const { user, loading, repositories, reloadRepositories } = useAppData();

  const renderItem = useCallback(({item}: renderItemProps) => {
    return <Repository data={item} />
  }, []);
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      user !== '' && reloadRepositories();
    });
    
    return unsubscribe;
  }, [navigation]);
  
  const ListEmptyComponent = useCallback(() => {
    return(
      <S.InfoContainer>
        <S.InfoLabel>Não foi possível encontrar usuário</S.InfoLabel>
      </S.InfoContainer>
    );
  }, []);

  return(
    <S.Container>
      <Header />
      {
        user === '' ?
          <S.InfoContainer>
            <S.InfoLabel>Insira um Usuário no ícone</S.InfoLabel>
            <SettingsFilled />
          </S.InfoContainer>
        :
          <VirtualizedList
            data={repositories}
            refreshing={loading}
            initialNumToRender={8}
            renderItem={renderItem}
            ListEmptyComponent={ListEmptyComponent}
            onRefresh={reloadRepositories}
            keyExtractor={item => item.id}
            getItemCount={data => data.length}
            showsVerticalScrollIndicator={false}
            getItem={(data, index) => data[index]}
            contentContainerStyle={{paddingBottom: 16}}
          />
      }
    </S.Container>
  );
}