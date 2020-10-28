import React, { FC, memo, useState } from 'react';
import moment from 'moment';
import * as Styled from './styles';
import { TouchableOpacity } from 'react-native';

interface IProps {
  right? : boolean;
  date : string;
  text : string;
}

const Message : FC<IProps> = ({ right , text , date }) => {
  const [ hideDate , setHideDate ] = useState<boolean>(true);

  const toogleHideDate = () => setHideDate(() => !hideDate);
  
  return <Styled.Container isRight={right} as={TouchableOpacity} onPress={toogleHideDate} >
    <Styled.MessageContainer isHide={hideDate}>
      <Styled.Message>{text}</Styled.Message>
    </Styled.MessageContainer>
    { !hideDate && (
      <Styled.Date>{moment(date).format('MM/DD/YYYY')}</Styled.Date>
    )}
  </Styled.Container>
}

export default memo(Message);