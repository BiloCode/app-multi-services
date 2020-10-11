import React from 'react';
import faker from 'faker';
import * as WDS from './styles';

import HeaderNavigation from '../../components/HeaderNavigation';
import WorkDate from './components/WorkDate';
import BottonContent from './components/BottonContent';
import { ScrollView } from 'react-native';
import useWorkDetailInit from './hooks/useWorkDetailInit';

const WorkDetail = () => {
  const { workState } = useWorkDetailInit();

  return <WDS.Container>
    <ScrollView showsVerticalScrollIndicator={false} >
      <HeaderNavigation.Title title='Detalles del Trabajo' />
      <WDS.MainContainer>
        <WDS.WorkMainData>
          <WDS.WorkTitle>Arreglo de Mesa</WDS.WorkTitle>
          {
            workState === 'completed' && (
              <WDS.WorkDateContainer>
                <WorkDate title='Fecha Inicio' date='28/09/19' />
                <WorkDate title='Fecha Acabado' date='01/10/19' />
              </WDS.WorkDateContainer>
            )
          }
        </WDS.WorkMainData>
        <WDS.PriceContainer>
          <WDS.Price>Precio Estimado : S/ 38.00</WDS.Price>
        </WDS.PriceContainer>
        <WDS.WorkDescriptionContainer>
          <WDS.WorkDescriptionTitle>Descripción</WDS.WorkDescriptionTitle>
          <WDS.WorkDescriptionText>{faker.lorem.words(30)}</WDS.WorkDescriptionText>
        </WDS.WorkDescriptionContainer>
      </WDS.MainContainer>
      <BottonContent workState={workState} />     
    </ScrollView>
  </WDS.Container>
};

export default WorkDetail;