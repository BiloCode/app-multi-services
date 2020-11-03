import React from 'react';
import Button from './Button';
import useButtonSectionAction from './hooks/useButtonSectionActions';
import * as Styled from './styles';

const ButtonSection = () => {
  const { NavigateToChatList , NavigateToWorkList } = useButtonSectionAction();
  
  return <Styled.Container>
    <Styled.TextTitle>Realiza alguna de estas acciones</Styled.TextTitle>
    <Button onPress={NavigateToWorkList} text='Ver mis Trabajos' />
    <Styled.ButtonContainer>
      <Button isLight onPress={NavigateToChatList} text='Ver mis Conversaciones' />
    </Styled.ButtonContainer>
  </Styled.Container>
}

export default ButtonSection;
