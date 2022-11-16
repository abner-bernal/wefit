import AsyncStorage from "@react-native-async-storage/async-storage";
import { RepositoryProps } from "../components/Repository";
import { COLLECTION_FAVORITES } from "../configs/database";

export const saveFavorite = async (repository: RepositoryProps) => {
  const storage = await AsyncStorage.getItem(COLLECTION_FAVORITES);
  const favorites: RepositoryProps[] = storage ? JSON.parse(storage) : [];
  repository.favorite = true;

  const foundRepository = favorites.find(
    (item: RepositoryProps) => item.id === repository.id
  );

  if(!foundRepository) {
    await AsyncStorage.setItem(
      COLLECTION_FAVORITES,
      JSON.stringify([...favorites, repository])
    );
  }
}

export const removeFavorite = async (id: string) => {
  const storage = await AsyncStorage.getItem(COLLECTION_FAVORITES);
  if(storage) {
    let favorites: RepositoryProps[] = JSON.parse(storage);

    const index = favorites.findIndex(
      (repository: RepositoryProps) => repository.id === id
    );

    favorites.splice(index, 1);

    await AsyncStorage.setItem(
      COLLECTION_FAVORITES,
      JSON.stringify([...favorites])
    );
  }
}