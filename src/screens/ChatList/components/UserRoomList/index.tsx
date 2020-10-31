import React, { memo, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { ReduxRootState } from '../../../../metadata/types';
import { ChatMetadata } from '../../../../redux/reducers/Chat/metadata';
import LoadingRooms from '../LoadingRooms';
import UserRoomCard from '../UserRoomCard';
import List from './List';
import Spinner from './Spinner';
import * as Styled from './styles';
import TextEmptyList from './TextEmptyList';

const UserRoomList = () => {
  const { userChatList } = useSelector<ReduxRootState, ChatMetadata.IStore>(({ chat }) => chat, shallowEqual);
  const [ isScrollEnd , setIsScrollEnd ] = useState<boolean>(false);

  if(userChatList.isLoading) return <Spinner />

  return <Styled.Container showsVerticalScrollIndicator={false} as={ScrollView} >
    {
      userChatList.list.length ? 
        <List data={userChatList.list} /> :
        <TextEmptyList />
    }
    { isScrollEnd && <LoadingRooms /> }
  </Styled.Container>
};

export default memo(UserRoomList);