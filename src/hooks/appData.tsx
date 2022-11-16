import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  createContext,
  useContext,
  ReactNode,
  useState,
} from 'react';
import { RepositoryProps } from '../components/Repository';
import { COLLECTION_FAVORITES } from '../configs/database';
import { api } from '../services/api';

type AppContextData = {
  user: string;
  setUser: (param: string) => void;
  repositories: RepositoryProps[];
  favorites: RepositoryProps[];
  loadRepositories: (param: string) => void;
  reloadRepositories: () => void
  loadFavorites: () => void;
  loading: boolean;
}

type AppDataProviderProps = {
  children: ReactNode;
}

const AppDataContext = createContext({} as AppContextData);

function AppDataProvider({ children }: AppDataProviderProps) {
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [favorites, setFavorites] = useState<RepositoryProps[]>([]);
  const [user, setUser] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const loadRepositories = (enteredUser: string) => {
    searchRepositories(enteredUser);
  }

  const reloadRepositories = () => {
    searchRepositories(undefined);
  }

  const searchRepositories = async (enteredUser: string | undefined = user) => {
    try {
      setLoading(true);
      if(enteredUser !== '') {
        const responseData = await api.get(`/users/${enteredUser}/repos`);
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
        
        setRepositories([...repositoriesData]);
      }
    } catch {
      throw new Error('Não foi possível carregar os repositórios');
    } finally {
      setLoading(false);
    }
  }

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

  return (
    <AppDataContext.Provider value={{
      user,
      setUser,
      loading,
      repositories,
      favorites,
      loadFavorites,
      loadRepositories,
      reloadRepositories,
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