import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useCallback, useEffect } from "react";
import { VirtualizedList } from "react-native";

import Repository, { RepositoryProps } from "../../components/Repository";
import { SettingsFilled } from "../../icons/SettingsFilled";
import { RootTabParams } from "../../routes/tab.routes";
import { Header } from "../../components/Header";
import { useAppData } from "../../hooks/appData";

import * as S from "./styles";

type HomeProps = BottomTabScreenProps<RootTabParams>;

type renderItemProps = {
  item: RepositoryProps;
};

export function Home({ navigation }: HomeProps) {
  const { 
    user, 
    loading, 
    loadRepositories, 
    reloadRepositories,
    currentRepositories, 
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
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadRepositories();
    });
    
    return unsubscribe;
  }, [navigation]);
  
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
            data={currentRepositories}
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