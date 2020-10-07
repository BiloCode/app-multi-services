import React from 'react';
import * as WWLS from './styles'
import { ScrollView } from 'react-native';
import MainTitle from '../../components/MainTitle';
import VerticalBar from '../../components/VerticalBar';
import DropDown from './DropDown';

const works = new Array(4).fill('');

const WorkerWorkList = () => (
  <VerticalBar>
    <ScrollView showsVerticalScrollIndicator={false}>
      <MainTitle text='Mis Trabajos' />
      <WWLS.DropDownWorks>
        <DropDown title='En Proceso' works={works} />
        <DropDown title='Pendientes' works={works} />
        <DropDown title='Completados' works={works} />         
      </WWLS.DropDownWorks>
    </ScrollView>
  </VerticalBar>
);

export default WorkerWorkList;