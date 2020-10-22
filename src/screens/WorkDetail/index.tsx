import React from 'react';
import * as WDS from './styles';

import HeaderNavigation from '../../components/HeaderNavigation';
import WorkDate from './components/WorkDate';
import BottonContent from './components/BottonContent';
import { ScrollView } from 'react-native';
import useWorkDetailInit from './hooks/useWorkDetailInit';
import useIsWholeNumber from '../../hooks/useIsWholeNumber';

const WorkDetail = () => {
  const { state , title , description , price , location, createdAt } = useWorkDetailInit();
  const isWholeNumber = useIsWholeNumber(price!);

  return <WDS.Container>
    <ScrollView showsVerticalScrollIndicator={false} >
      <HeaderNavigation.Title title='Detalles del Trabajo' />
      <WDS.MainContainer>
        <WDS.WorkMainData>
          <WDS.WorkTitle>{title}</WDS.WorkTitle>
          {
            state === 'completed' && (
              <WDS.WorkDateContainer>
                <WorkDate title='Fecha Inicio' date={createdAt!} />
                <WorkDate title='Fecha Acabado' date='01/10/19' />
              </WDS.WorkDateContainer>
            )
          }
        </WDS.WorkMainData>
        <WDS.PriceContainer>
          <WDS.Price>Precio Estimado : S/ {isWholeNumber ? price + '.00' : price}</WDS.Price>
        </WDS.PriceContainer>
        <WDS.WorkDescriptionContainer>
          <WDS.WorkDescriptionTitle>Descripción</WDS.WorkDescriptionTitle>
          <WDS.WorkDescriptionText>{description}</WDS.WorkDescriptionText>
        </WDS.WorkDescriptionContainer>
      </WDS.MainContainer>
      <BottonContent workState={state!} />     
    </ScrollView>
  </WDS.Container>
};

export default WorkDetail;