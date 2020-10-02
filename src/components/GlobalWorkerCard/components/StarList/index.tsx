import React, { FC, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { IStar } from '../../../../metadata/interfaces';

interface IProps {
  stars : IStar[];
}

const StarList : FC<IProps> = ({ stars }) => (
  <>
    {
      stars.map((v,i) => (
        <AntDesign key={i} size={12} name={v.name} color='orangered' />
      ))
    }
  </>
);

export default memo(StarList);