import React, { FC, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import BaseInput from '../BaseInput';
import Input from '../../../../components/Input';
import Select from '../Select';
import { shallowEqual, useSelector } from 'react-redux';
import { ReduxRootState } from '../../../../metadata/types';
import { RegisterMetadata } from '../../../../redux/reducers/Register/metadata';
import { Picker } from 'react-native';

interface IProps {
  departmentSelected : number;
  provinceSelected : number;
  districtSelected : number;
  onChangeName?(value : string) : void;
  onChangeLastname?(value : string) : void;
  onChangeDepartment?(item : number,index) : void;
  onChangeProvince?(item : number,index) : void;
  onChangeDistrict?(item : number,index) : void;
}

const InputUserInformation : FC<IProps> = ({ departmentSelected, districtSelected, provinceSelected, onChangeName, onChangeDepartment, onChangeDistrict,onChangeProvince, onChangeLastname }) => {
  //Redux
  const { 
    departmentData,
    districtFilter,
    provinceFilter
  } = useSelector<ReduxRootState,RegisterMetadata.IStore>(({ register }) => register,shallowEqual);

  return <BaseInput title='Informacion Personal' description='Esta informacion servira para identificarlo' >
    <Input
      icon={<AntDesign name="user" size={16} color="#BBBBBB" />}
      placeholder='Nombre...'
      onChangeText={onChangeName}
    />
    <Input
      icon={<AntDesign name="user" size={16} color="#BBBBBB" />}
      placeholder='Apellido...'
      onChangeText={onChangeLastname}
    />
    <Select
      icon={<AntDesign name="enviromento" size={16} color="#BBBBBB" />}
      onChange={onChangeDepartment}
      itemSelected={departmentSelected}
    >
      {
        departmentData.map((v,i) => (
          <Picker.Item key={i} color='#585858' label={v.name} value={v.id} />
        ))
      }
    </Select>
    <Select
      icon={<AntDesign name="enviromento" size={16} color="#BBBBBB" />}
      onChange={onChangeProvince}
      itemSelected={provinceSelected}
    >
      {
        provinceFilter.map((v,i) => (
          <Picker.Item key={i} color='#585858' label={v.name} value={v.id} />
        ))
      }
    </Select>
    <Select
      icon={<AntDesign name="enviromento" size={16} color="#BBBBBB" />}
      onChange={onChangeDistrict}
      itemSelected={districtSelected}
    >
      {
        districtFilter.map((v,i) => (
          <Picker.Item key={i} color='#585858' label={v.name} value={v.id} />
        ))
      }
    </Select>
  </BaseInput>
}

export default memo(InputUserInformation);