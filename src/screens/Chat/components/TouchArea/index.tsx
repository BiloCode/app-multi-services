import React, { memo } from 'react';
import Input from './components/Input';
import SendButton from './components/SendButton';
import useSendMessage from './hooks/useSendMessage';
import * as Styled from './styles';

const TouchArea = () =>  {
  const { ChangeMessageText , SendMessage , messageText , isJoinRoom } = useSendMessage();

  return <Styled.Container>
    <Input onChangeText={ChangeMessageText} value={messageText} />
    <SendButton onPress={SendMessage} />
    { !isJoinRoom && <Styled.ContainerIsNotJoinRoom /> }
  </Styled.Container>
}

export default memo(TouchArea);