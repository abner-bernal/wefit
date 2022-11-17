import { useState } from 'react';

import { SettingsBottomSheet } from '../SettingsBottomSheet';
import { SettingsFilled } from '../../icons/SettingsFilled';

import * as S from './styles';

export function Header() {
  const [isModalVisible, setModalVisible] = useState(false);

  return(
    <>
      <S.Container>
        <S.Title>WeFit</S.Title>
        <S.SettingsButton onPress={() => setModalVisible(true)}>
          <SettingsFilled />
        </S.SettingsButton>
      </S.Container>
      <SettingsBottomSheet 
        setModalVisible={setModalVisible}
        isModalVisible={isModalVisible} 
      />
    </>
  );
}