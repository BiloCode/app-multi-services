import React, { memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import TDS from './styles';
import { useNavigation } from '@react-navigation/native';

const TopDesign = () => {
  const { goBack } = useNavigation();
  const NavigateToBack = () => goBack();

  return <TDS.Container>
    <TDS.CircleRight />
    <TDS.CircleLeft />
    <TDS.FloatingContent>
      <TDS.TextContainer>
        <TDS.TextTitle>Registrate Ahora!</TDS.TextTitle>
        <TDS.TextDescription>Registrate y pertenece a nuestra gran comunidad</TDS.TextDescription>
      </TDS.TextContainer>
    </TDS.FloatingContent>
    <TDS.IconBack onPress={NavigateToBack} as={TouchableOpacity}>
      <AntDesign name="arrowleft" size={24} color="#fff" />
    </TDS.IconBack>
  </TDS.Container>
}

export default memo(TopDesign);