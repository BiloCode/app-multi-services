import React, { FC, memo } from 'react';
import useIsWholeNumber from '../../../../hooks/useIsWholeNumber';
import BaseBox from '../BaseBox';
import PriceBoxStyles from './styles';

interface IProps {
  data : number;
}

const PriceBox : FC<IProps> = ({ data }) => {
  const isWholeNumber = useIsWholeNumber(data);
  const price = isWholeNumber ? data + '.00' : data;

  return <BaseBox>
    <PriceBoxStyles.Container>
      <PriceBoxStyles.BaseText>Precio Inicial / Base</PriceBoxStyles.BaseText>
      <PriceBoxStyles.PriceText>S/ {price}</PriceBoxStyles.PriceText>
    </PriceBoxStyles.Container>
  </BaseBox>
}

export default memo(PriceBox);