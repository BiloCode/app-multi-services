import React, { FC } from 'react';
import * as Styled from './styles';

interface IProps {
  text : string;
}

const SmallText : FC<IProps> = ({ text }) => (
  <Styled.Container>
    <Styled.Text>{text}</Styled.Text>
  </Styled.Container>
);

export default SmallText;