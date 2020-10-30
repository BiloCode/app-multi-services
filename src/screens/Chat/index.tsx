import React from 'react';
import Header from './components/Header';
import MessageList from './components/MessageList';
import TouchArea from './components/TouchArea';
import { MessageListScrollProvider } from './context/MessageListScroll';
import useRoomInit from './hooks/useRoomInit';
import * as WCS from './styles'

const Chat = () => {
  const __init = useRoomInit();

  return <WCS.Container>
    <MessageListScrollProvider>
      <Header />
      <MessageList />
      <TouchArea />      
    </MessageListScrollProvider>
  </WCS.Container>
};

export default Chat;