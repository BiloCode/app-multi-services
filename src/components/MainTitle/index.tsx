import React, { FC, memo } from 'react';
import MainTitleStyles from './styles';

interface IProps {
  text : string;
}

const MainTitle : FC<IProps> = ({ text }) => {
  return <MainTitleStyles.Container>
    <MainTitleStyles.Title>{text}</MainTitleStyles.Title>
  </MainTitleStyles.Container>
}

export default memo(MainTitle);