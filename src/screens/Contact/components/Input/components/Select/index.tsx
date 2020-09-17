import React, { FC } from 'react';
import NSInput from '../../metadata';
import _Base from '../_Base';
import SelectStyles from './styles';

const Select : FC<NSInput.IPropsSelect> = ({ onChange , itemSelected , label , children }) => {
  return <_Base label={label}>
    <SelectStyles.Container>
      <SelectStyles.Picker
        onValueChange={onChange}
        selectedValue={itemSelected}
      >
        {children}
      </SelectStyles.Picker>
    </SelectStyles.Container>
  </_Base>
}

export default Select;