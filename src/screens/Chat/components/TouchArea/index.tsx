import React, { memo } from 'react';
import Input from './components/Input';
import SendButton from './components/SendButton';
import useSendMessage from './hooks/useSendMessage';
import * as TAS from './styles';

const TouchArea = () =>  {
  const { ChangeMessageText , SendMessage , messageText } = useSendMessage();

  return <TAS.Container>
    <Input onChangeText={ChangeMessageText} value={messageText} />
    <SendButton onPress={SendMessage} />
  </TAS.Container>
}

export default memo(TouchArea);