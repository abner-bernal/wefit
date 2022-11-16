import { PressableProps } from 'react-native';

import { StarBorderFilled } from '../../icons/StarBorderFilled';
import { StarFilled } from '../../icons/StarFilled';

import * as S from './styles';

type Props = PressableProps & {
  isFavorite: boolean;
}

export function FavoriteButton({ isFavorite, ...rest }: Props) {
  return(
    <S.PressableContainer isFavorite={isFavorite} {...rest}>
      <S.Title>{isFavorite ? 'Desfavoritar' : 'Favoritar'}</S.Title>
      {isFavorite ? <StarBorderFilled /> : <StarFilled />}
    </S.PressableContainer>
  );
}