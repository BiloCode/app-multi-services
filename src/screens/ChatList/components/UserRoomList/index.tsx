import React, { memo, useState } from 'react';
import { ScrollView } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { ReduxRootState } from '../../../../metadata/types';
import { ChatMetadata } from '../../../../redux/reducers/Chat/metadata';
import LoadingRooms from '../LoadingRooms';
import UserRoomCard from '../UserRoomCard';
import * as Styled from './styles';

const UserRoomList = () => {
  const { userChatList } = useSelector<ReduxRootState, ChatMetadata.IStore>(({ chat }) => chat, shallowEqual);
  const [ isScrollEnd , setIsScrollEnd ] = useState<boolean>(false);

  return <Styled.Container showsVerticalScrollIndicator={false} as={ScrollView} >
    {
      userChatList.list.map((v,i) => (
        <UserRoomCard key={i} {...v} />
      ))
    }
    { isScrollEnd && <LoadingRooms /> }
  </Styled.Container>
};

export default memo(UserRoomList);