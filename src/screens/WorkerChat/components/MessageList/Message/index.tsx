import React, { FC } from 'react';
import * as MS from './styles';

interface IProps {
  right? : boolean;
  text : string;
}

const Message : FC<IProps> = ({ right , text }) => (
  <MS.Container isRight={right} >
    <MS.Message>{text}</MS.Message>
  </MS.Container>
);

export default Message;