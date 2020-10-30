import React, { FC } from 'react';
import * as WDS from './styles';

interface IProps {
  title : string;
  date : string;
}

const WorkDate : FC<IProps> = ({ title , date }) => (
  <WDS.Container>
    <WDS.TitleDate>{title}</WDS.TitleDate>
    <WDS.Date>{date || '-- --'}</WDS.Date>
  </WDS.Container>
);

export default WorkDate;