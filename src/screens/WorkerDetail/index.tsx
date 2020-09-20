import React, { memo } from 'react';
import faker from 'faker';
import { ScrollView } from 'react-native-gesture-handler';
import WDS from './styles';

//Components
import GlobalButton from '../../components/GlobalButton';
import BaseBox from './components/BaseBox';
import ProfileSection from './components/ProfileSection';
import SpecialtyBox from './components/SpecialtyBox';
import PriceBox from './components/PriceBox';
import LocationBox from './components/LocationBox';
import useParamsWorkerDetail from './hooks/useParamsWorkerDetail';

const WorkerDetail = () => {
  const { availability , basePrice , fullName , id , location , profileImage , specialty } = useParamsWorkerDetail();

  return <WDS.MainContainer as={ScrollView}>
    <ProfileSection fullName={fullName} availability={availability!} profileImage={profileImage!} />
    <WDS.WorkInformation>
      <SpecialtyBox data={specialty!} />
      <BaseBox>
        <WDS.TextDescription>{faker.lorem.words(50)}</WDS.TextDescription>
      </BaseBox>
      <PriceBox data={basePrice!} />
      <LocationBox data={location!} />
      <WDS.MarginVerticalContainer>
        <WDS.MarginBottom>
          <GlobalButton backgroundColor='#ECECEC' textColor='#6F6F6F' text='Enviar un Mensaje' />
        </WDS.MarginBottom>
        <GlobalButton text='Solicitar Servicio' />
      </WDS.MarginVerticalContainer>
    </WDS.WorkInformation>
  </WDS.MainContainer>
}

export default memo(WorkerDetail);