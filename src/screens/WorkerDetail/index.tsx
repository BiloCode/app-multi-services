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
import useRequestServices from './hooks/useRequestServices';

const WorkerDetail = () => {
  const { 
    availability,
    basePrice,
    fullName,
    location,
    profileImage,
    specialty,
    backgroundImage,
    NavigateToChat
  } = useParamsWorkerDetail();
  const RequestServices = useRequestServices();

  return <WDS.MainContainer as={ScrollView}>
    <ProfileSection 
      fullName={fullName} 
      availability={availability!} 
      profileImage={profileImage!} 
      backgroundImage={backgroundImage!}
    />
    <WDS.WorkInformation>
      <SpecialtyBox data={specialty!} />
      <BaseBox>
        <WDS.TextDescription>{faker.lorem.words(50)}</WDS.TextDescription>
      </BaseBox>
      <PriceBox data={basePrice!} />
      <LocationBox coords={location.coords!} mapLocation={location.mapLocation} />
      <WDS.MarginVerticalContainer>
        <WDS.MarginBottom>
          <GlobalButton backgroundColor='#ECECEC' textColor='#6F6F6F' text='Enviar un Mensaje' onPress={NavigateToChat} />
        </WDS.MarginBottom>
        <GlobalButton text='Solicitar Servicio' onPress={RequestServices} />
      </WDS.MarginVerticalContainer>
    </WDS.WorkInformation>
  </WDS.MainContainer>
}

export default memo(WorkerDetail);