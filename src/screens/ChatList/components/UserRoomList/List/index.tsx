import React, { FC, memo } from 'react';
import { ChatMetadata } from '../../../../../redux/reducers/Chat/metadata';
import UserRoomCard from '../../UserRoomCard';

interface IProps {
  data : ChatMetadata.IUserRoomList[]
}

const List : FC<IProps> = ({ data }) => (
  <>
    {
      data.map((v,i) => (
        <UserRoomCard key={i} {...v} />
      ))
    }
  </>
);

export default memo(List);