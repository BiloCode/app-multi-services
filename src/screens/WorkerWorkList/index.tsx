import React from 'react';
import * as WWLS from './styles'
import { ScrollView } from 'react-native';
import MainTitle from '../../components/MainTitle';
import VerticalBar from '../../components/VerticalBar';
import DropDown from './DropDown';
import useWorkerWorkListInit from './hooks/useWorkerWorkListInit';
import useFilterWorks from './hooks/useFilterWorks';

const WorkerWorkList = () => {
  const init = useWorkerWorkListInit();
  const { worksPendient , worksWaiting , worksComplete , worksLoading , worksReject } = useFilterWorks();

  return <VerticalBar>
    <ScrollView showsVerticalScrollIndicator={false}>
      <MainTitle text='Mis Trabajos' />
      <WWLS.DropDownWorks>
        <DropDown title='En espera' works={worksWaiting} isLoading={worksLoading} />
        <DropDown title='Pendientes' works={worksPendient} isLoading={worksLoading} />
        <DropDown title='Completados' works={worksComplete} isLoading={worksLoading} />
        <DropDown title='Rechazados' works={worksReject} isLoading={worksLoading} />         
      </WWLS.DropDownWorks>
    </ScrollView>
  </VerticalBar>
};

export default WorkerWorkList;