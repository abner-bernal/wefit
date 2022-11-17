import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

import { COLLECTION_FAVORITES } from '../configs/database';
import { RepositoryProps } from '../components/Repository';
import { api } from '../services/api';
import { AxiosResponse } from 'axios';

type AppContextData = {
  setUser: (param: string) => void;
  currentRepositories: RepositoryProps[];
  reloadRepositories: () => void;
  favorites: RepositoryProps[];
  loadRepositories: () => void;
  loadFavorites: () => void;
  loading: boolean;
  user: string;
}

type AppDataProviderProps = {
  children: ReactNode;
}

const AppDataContext = createContext({} as AppContextData);

function AppDataProvider({ children }: AppDataProviderProps) {
  const [generalRepositories, setGeneralRepositories] = useState<RepositoryProps[]>([]);
  const [currentRepositories, setCurrentRepositories] = useState<RepositoryProps[]>([]);
  const [favorites, setFavorites] = useState<RepositoryProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<string>('');
    
  const loadRepositories = async () => {
    try {
      setLoading(true);
      if(user !== '') {
        const responseData = await api.get(`/users/${user}/repos`);

        const storage = await AsyncStorage.getItem(COLLECTION_FAVORITES);
        const storageFavorites: RepositoryProps[] = storage ? JSON.parse(storage) : [];
        
        const response: RepositoryProps[] = responseData.data.map(
          (item: any) => {
            const foundRepository = storageFavorites.find(
              (repository: RepositoryProps) => repository.id === item.id
            );

            const isFavorite = foundRepository !== undefined;

            return({
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
        );

        setGeneralRepositories([...response]);
      }
    } catch {
      setGeneralRepositories([]);
    } finally {
      setLoading(false);
    }
  }

  const reloadRepositories = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_FAVORITES);
    const storageFavorites: RepositoryProps[] = storage ? JSON.parse(storage) : [];

    const response: RepositoryProps[] = generalRepositories.reduce(
      (result: RepositoryProps[], item: RepositoryProps) => {

        const foundRepository = storageFavorites.find(
          (repository: RepositoryProps) => repository.id === item.id
        );

        const isFavorite = foundRepository !== undefined;

        if(!isFavorite) {
          result.push({
            id: item.id,
            htmlUrl: item.htmlUrl,
            language: item.language,
            fullName: item.fullName,
            description: item.description,
            avatarUrl: item.avatarUrl,
            stargazersCount: item.stargazersCount,
            favorite: isFavorite,
          });
        }
        return result;
      }, []
    );

    setCurrentRepositories([...response]);
  };

  useEffect(() => {
    reloadRepositories();
  }, [generalRepositories]);

  useEffect(() => {
    loadRepositories();
  }, [user]);

  const loadFavorites = async () => {
    try {
      setLoading(true);
      const storage = await AsyncStorage.getItem(COLLECTION_FAVORITES);

      if(storage) {
        const favorites = JSON.parse(storage);      
        setFavorites([...favorites]);
      }
      
    } catch {
      throw new Error('Não foi possível carregar os favoritos');
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppDataContext.Provider value={{
      user,
      setUser,
      loading,
      currentRepositories,
      reloadRepositories,
      favorites,
      loadFavorites,
      loadRepositories,
    }}>
      {children}
    </AppDataContext.Provider>
  )
}

function useAppData() {
  const context = useContext(AppDataContext);
  return context;
}

export {
  AppDataProvider,
  useAppData
}