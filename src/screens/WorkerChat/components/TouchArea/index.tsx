import React, { memo } from 'react';
import Input from './components/Input';
import SendButton from './components/SendButton';
import useMessageInput from './hooks/useMessageInput';
import useSendMessage from './hooks/useSendMessage';
import * as TAS from './styles';

const TouchArea = () =>  {
  const { messageText , ChangeMessageText } = useMessageInput();
  const SendMessage = useSendMessage(messageText);

  return <TAS.Container>
    <Input onChangeText={ChangeMessageText} />
    <SendButton onPress={SendMessage} />
  </TAS.Container>
}

export default memo(TouchArea);