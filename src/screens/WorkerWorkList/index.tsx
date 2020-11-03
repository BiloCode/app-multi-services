import React from 'react';
import * as WWLS from './styles'
import { ScrollView } from 'react-native';
import MainTitle from '../../components/MainTitle';
import VerticalBar from '../../components/VerticalBar';
import DropDown from './DropDown';
import useWorkerWorkListInit from './hooks/useWorkerWorkListInit';
import useFilterWorks from './hooks/useFilterWorks';
import MainDescription from '../../components/MainDescription';
import useDropDown from './hooks/useDropDown';

const WorkerWorkList = () => {
  const __init = useWorkerWorkListInit();
  const { worksPendient , worksWaiting , worksComplete , worksLoading , worksReject } = useFilterWorks();
  const { ToggleHideContent , dropDownActive } = useDropDown();

  return <VerticalBar>
    <ScrollView showsVerticalScrollIndicator={false}>
      <MainTitle text='Mis Trabajos' />
      <MainDescription text='En esta sección encontraras todos tus trabajos realizados, rechazados, pendientes y completados.' />
      <WWLS.DropDownWorks>
        <DropDown
          title='En espera'
          works={worksWaiting}
          isLoading={worksLoading}
          isOpen={dropDownActive === 0}
          onPress={ToggleHideContent(0)}
        />
        <DropDown 
          title='Pendientes' 
          works={worksPendient} 
          isLoading={worksLoading} 
          isOpen={dropDownActive === 1}
          onPress={ToggleHideContent(1)}
        />
        <DropDown 
          title='Completados' 
          works={worksComplete} 
          isLoading={worksLoading} 
          isOpen={dropDownActive === 2}
          onPress={ToggleHideContent(2)}
        />
        <DropDown 
          title='Rechazados' 
          works={worksReject} 
          isLoading={worksLoading} 
          isOpen={dropDownActive === 3}
          onPress={ToggleHideContent(3)}
        />         
      </WWLS.DropDownWorks>
    </ScrollView>
  </VerticalBar>
};

export default WorkerWorkList;