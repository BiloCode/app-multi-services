import React, { FC } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import * as TPWS from './styles';

interface IProps {
  text : string;
}

const DefaultText : FC<IProps> = ({ text }) => (
  <TPWS.Container>
    <TPWS.Icon>
      <MaterialIcons name="work" size={15} color="#1d1d1d" />
    </TPWS.Icon>
    <TPWS.Message>{text}</TPWS.Message>
  </TPWS.Container>
);

export default DefaultText;