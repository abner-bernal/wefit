import { VirtualizedList } from "react-native";
import { useCallback } from "react";

import Repository, { RepositoryProps } from "../../components/Repository";
import { SettingsFilled } from "../../icons/SettingsFilled";
import { Header } from "../../components/Header";
import { useAppData } from "../../hooks/appData";

import * as S from "./styles";

type renderItemProps = {
  item: RepositoryProps;
};

export function Home() {
  const { 
    user, 
    loading, 
    repositories,
    loadRepositories,
  } = useAppData();

  const renderItem = useCallback(({item}: renderItemProps) => {
    return <Repository data={item} />
  }, []);
  
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
            onRefresh={loadRepositories}
            keyExtractor={item => item.id}
            getItemCount={data => data.length}
            showsVerticalScrollIndicator={false}
            getItem={(data, index) => data[index]}
            ListEmptyComponent={ListEmptyComponent}
            contentContainerStyle={{paddingBottom: 16}}
          />
      }
    </S.Container>
  );
}