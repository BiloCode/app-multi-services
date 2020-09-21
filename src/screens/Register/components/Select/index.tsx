import React, { FC } from 'react';
import SelectStyles from './styles';

interface IProps {
  icon : JSX.Element;
  onChange?(item,index) : void;
  itemSelected : any;
}

const Select : FC<IProps> = ({ children , icon , onChange , itemSelected }) => {
  return <SelectStyles.Container>
    <SelectStyles.ContainerIcon>
      {icon}
    </SelectStyles.ContainerIcon>
    <SelectStyles.Select
      onValueChange={onChange}
      selectedValue={itemSelected}
      itemStyle={{ fontSize : 10 }}
    >
      {children}
    </SelectStyles.Select>
  </SelectStyles.Container>
}

export default Select;