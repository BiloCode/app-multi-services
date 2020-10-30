import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Styled from './styles';

interface IProps {
  isRoomsCompleted? : boolean;
}

const LoadingRooms : FC<IProps> = ({ isRoomsCompleted }) => (
  <Styled.Container>
    {
      isRoomsCompleted ?
        <Styled.TextCompleted>No ahi mas mensajes que cargar.</Styled.TextCompleted> :
        <ActivityIndicator color='#fff' />
    }
  </Styled.Container>
);

export default LoadingRooms;