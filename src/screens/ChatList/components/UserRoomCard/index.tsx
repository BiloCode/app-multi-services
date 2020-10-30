import React, { FC } from 'react';
import faker from 'faker';
import moment from 'moment';
import { AntDesign } from '@expo/vector-icons';
import AvatarImage from '../../../../components/AvatarImage';
import * as Styled from './styles';
import { TouchableOpacity } from 'react-native';
import useNavigateToChatScreen from '../../../../hooks/useNavigateToChatScreen';
import { ChatMetadata } from '../../../../redux/reducers/Chat/metadata';

const UserRoomCard : FC<ChatMetadata.IUserRoomList> = ({ id , fullName, profileImage , message , basePrice , specialty }) => {
  const NavigateToChat = useNavigateToChatScreen();

  const GoToChat = () => {
    let params : any = { id , fullName, profileImage };

    if(basePrice) params.basePrice = basePrice;
    if(specialty) params.specialty = specialty;

    NavigateToChat(params);
  }

  const username = fullName.length > 18 ? fullName.substr(0,18) + '...' : fullName;
  const date = moment(message.createdAt).format('MM/DD/YYYY');
  const lastMessage = message.value.length > 80 ? message.value.slice(0,80) + '...' : message.value;

  return <Styled.Container>
    <Styled.ProfileImageContainer>
      <AvatarImage size={50} iconSize={24} image={profileImage} />
    </Styled.ProfileImageContainer>
    <Styled.RoomMessageContent>
      <Styled.HeadRoomMessage>
        <Styled.UsernameHeadRoom>{username}</Styled.UsernameHeadRoom>
        <Styled.DateHeadRoom>{date}</Styled.DateHeadRoom>
      </Styled.HeadRoomMessage>
      <Styled.LastMessageRoom>{lastMessage}</Styled.LastMessageRoom>
    </Styled.RoomMessageContent>
    <Styled.ArrowRightContainer as={TouchableOpacity} onPress={GoToChat} >
      <AntDesign name="arrowright" size={20} color="#fff" />
    </Styled.ArrowRightContainer>
  </Styled.Container>
};

export default UserRoomCard;