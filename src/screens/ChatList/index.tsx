import React from 'react';
import * as Styled from './styles';
import HeaderNavigation from '../../components/HeaderNavigation';
import UserRoomList from './components/UserRoomList';
import useChatList from './hooks/useChatList';

const ChatList = () => {
  const { fullName , profileImage } = useChatList();

  return <Styled.Container>
    <HeaderNavigation.UserData fullName={fullName} profileImage={profileImage} />
    <UserRoomList />
  </Styled.Container>
}

export default ChatList;