import { Dimensions, Keyboard, Modal, StyleProp, ViewStyle } from 'react-native';
import { useCallback, useMemo, useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { useTheme } from 'styled-components';
import { 
  Extrapolate, 
  interpolate, 
  useAnimatedStyle, 
  useSharedValue 
} from 'react-native-reanimated';

import * as S from './styles';

type Props = {
  isModalVisible: boolean;
  setModalVisible: (param: boolean) => void;
}

const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

export function SettingsBottomSheet({isModalVisible, setModalVisible}: Props) {
  const [userInput, setUserInput] = useState('');

  const snapPoints = useMemo(() => [230], []);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const position = useSharedValue(SCREEN_HEIGHT);

  const { colors } = useTheme();

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      position.value,
      [SCREEN_HEIGHT, 0], 
      [0, 1],
      Extrapolate.CLAMP
    )
  }));

  const handleOpenBottomSheet = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  const handleCloseBottomSheet = useCallback(() => {
    Keyboard.dismiss();
    bottomSheetRef.current?.close();
  }, []);

  const backgroundStyle = useMemo<StyleProp<ViewStyle>>(() => ({
    borderTopLeftRadius: 4, 
    borderTopRightRadius: 4
  }), []);

  const handleStyle = useMemo<StyleProp<ViewStyle>>(() => ({
    height: 38,
    justifyContent: 'center',
  }), []);

  const handleIndicatorStyle = useMemo<StyleProp<ViewStyle>>(() => ({
    width: 30,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.modalIndicator,
  }), []);

  const handleUpdateUser = () => {
    //mudar usuario no contexto 
  }

  return(
    <Modal
      transparent
      visible={isModalVisible}
      animationType="none"
      onShow={handleOpenBottomSheet}
    >
      <S.Overlay style={overlayStyle} onPress={handleCloseBottomSheet}/>
      <BottomSheet
          index={-1}
          ref={bottomSheetRef}
          enablePanDownToClose 
          snapPoints={snapPoints}
          animatedPosition={position}
          handleStyle={handleStyle}
          backgroundStyle={backgroundStyle}
          onClose={() => setModalVisible(false)}
          handleIndicatorStyle={handleIndicatorStyle}
        >
          <S.Content>
            <S.Title>Alterar usuário selecionado</S.Title>
            <S.InputContainer>
              <S.InputTitle>Nome do usuário</S.InputTitle>
              <S.Input 
                placeholder='appswefit'
                onChangeText={setUserInput}
              />
            </S.InputContainer>
            <S.ButtonsContainer>
              <S.CancelButton onPress={handleCloseBottomSheet}>
                <S.CancelLabel>Cancelar</S.CancelLabel>
              </S.CancelButton>
              <S.SaveButton>
                <S.SaveLabel onPress={handleUpdateUser}>Salvar</S.SaveLabel>
              </S.SaveButton>
            </S.ButtonsContainer>
          </S.Content>
      </BottomSheet>
    </Modal>
  );
}