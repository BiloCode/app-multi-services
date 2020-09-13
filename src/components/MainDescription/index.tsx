import React, { FC, memo } from 'react';
import MainDescriptionStyles from './styles';

interface IProps {
  text : string;
}

const MainDescription : FC<IProps> = ({ text }) => {
  return <MainDescriptionStyles.Container>
    <MainDescriptionStyles.Text>{text}</MainDescriptionStyles.Text>
  </MainDescriptionStyles.Container>
}

export default memo(MainDescription);