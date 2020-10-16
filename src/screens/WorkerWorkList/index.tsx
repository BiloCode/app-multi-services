import React from 'react';
import * as WWLS from './styles'
import { ScrollView } from 'react-native';
import MainTitle from '../../components/MainTitle';
import VerticalBar from '../../components/VerticalBar';
import DropDown from './DropDown';
import useWorkerWorkListInit from './hooks/useWorkerWorkListInit';
import useFilterWorks from './hooks/useFilterWorks';

const works = new Array(4).fill('');

const WorkerWorkList = () => {
  const init = useWorkerWorkListInit();
  const { worksPendient , worksWaiting , worksComplete } = useFilterWorks();

  return <VerticalBar>
    <ScrollView showsVerticalScrollIndicator={false}>
      <MainTitle text='Mis Trabajos' />
      <WWLS.DropDownWorks>
        <DropDown title='En Proceso' works={worksWaiting} />
        <DropDown title='Pendientes' works={worksPendient} />
        <DropDown title='Completados' works={worksComplete} />         
      </WWLS.DropDownWorks>
    </ScrollView>
  </VerticalBar>
};

export default WorkerWorkList;