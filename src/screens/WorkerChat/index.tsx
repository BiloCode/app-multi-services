import React from 'react';
import Header from './components/Header';
import MessageList from './components/MessageList';
import TouchArea from './components/TouchArea';
import * as WCS from './styles'

const WorkerChat = () => (
  <WCS.Container>
    <Header />
    <MessageList />
    <TouchArea />
  </WCS.Container>
);

export default WorkerChat;