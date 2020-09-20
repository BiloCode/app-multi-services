import React, { FC, memo } from 'react';
import BaseBox from '../BaseBox';
import PriceBoxStyles from './styles';

interface IProps {
  data : number;
}

const PriceBox : FC<IProps> = ({ data }) => {
  return <BaseBox>
    <PriceBoxStyles.Container>
      <PriceBoxStyles.BaseText>Precio Inicial / Base</PriceBoxStyles.BaseText>
      <PriceBoxStyles.PriceText>S/ {data}</PriceBoxStyles.PriceText>
    </PriceBoxStyles.Container>
  </BaseBox>
}

export default memo(PriceBox);