import React from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import useMessageListInit from './hooks/useMessageListInit';
import Message from './Message';
import * as MLS from './styles';

const MessageList = () => {
  const { isLoadingMessages , messagesList , userId } = useMessageListInit();

  if(isLoadingMessages) {
    return <MLS.Container>
      <MLS.LoaderContainer>
        <ActivityIndicator size={32} color='blue' />
      </MLS.LoaderContainer>
    </MLS.Container>
  }

  return <MLS.Container>
    <ScrollView showsVerticalScrollIndicator={false} >
      {
        messagesList.map((v,i) => (
          <Message
            key={i}
            right={v.userId === userId}
            text={v.message} 
          />
        ))
      }
    </ScrollView>
  </MLS.Container>
}

export default MessageList;