import React from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { colors } from '../../../../config';
import useMessageListInit from './hooks/useMessageListInit';
import Message from './Message';
import * as MLS from './styles';

const MessageList = () => {
  const { isLoadingMessages , messagesList , userId , scrollView } = useMessageListInit();

  if(isLoadingMessages) {
    return <MLS.Container>
      <MLS.LoaderContainer>
        <ActivityIndicator size={32} color={colors.main} />
      </MLS.LoaderContainer>
    </MLS.Container>
  }

  return <MLS.Container>
    <ScrollView ref={scrollView} showsVerticalScrollIndicator={false} >
      {
        messagesList.map((v,i) => (
          <Message
            key={i}
            right={v.userId === userId}
            text={v.message}
            date={v.createdAt}
          />
        ))
      }
    </ScrollView>
  </MLS.Container>
}

export default MessageList;