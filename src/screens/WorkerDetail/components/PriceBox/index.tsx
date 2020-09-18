import React, { memo } from 'react';
import BaseBox from '../BaseBox';
import PriceBoxStyles from './styles';

const PriceBox = () => {
  return <BaseBox>
    <PriceBoxStyles.Container>
      <PriceBoxStyles.BaseText>Precio Inicial / Base</PriceBoxStyles.BaseText>
      <PriceBoxStyles.PriceText>S/ 16.00</PriceBoxStyles.PriceText>
    </PriceBoxStyles.Container>
  </BaseBox>
}

export default memo(PriceBox);