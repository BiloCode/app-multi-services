import React, { memo } from 'react';
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
import RequestServiceModal from './components/RequestServiceModal';
import useRequestServiceModal from './hooks/useRequestServiceModal';
import HeaderNavigation from '../../components/HeaderNavigation';

const WorkerDetail = () => {
  const { 
    availability,
    basePrice,
    fullName,
    location,
    profileImage,
    specialty,
    NavigateToChat,
    description,
    puntuaction
  } = useParamsWorkerDetail();
  const { isHide , setClose , openModal } = useRequestServiceModal(availability);

  return <>
    <WDS.MainContainer as={ScrollView}>
      <HeaderNavigation.Title title='Especialista' />
      <ProfileSection 
        fullName={fullName} 
        availability={availability} 
        profileImage={profileImage}
      />
      <WDS.WorkInformation>
        <SpecialtyBox name={specialty} puntuaction={puntuaction} />
        <BaseBox>
          <WDS.TextDescription>{description || 'Sin descripción disponible.'}</WDS.TextDescription>
        </BaseBox>
        <PriceBox data={basePrice!} />
        <LocationBox coords={location.coords} province={location.province} district={location.district} />
        <WDS.MarginVerticalContainer>
          <WDS.MarginBottom>
            <GlobalButton
              backgroundColor='#ECECEC'
              textColor='#6F6F6F'
              text='Enviar un Mensaje'
              onPress={NavigateToChat}
            />
          </WDS.MarginBottom>
          <GlobalButton text='Solicitar Servicio' onPress={openModal} />
        </WDS.MarginVerticalContainer>
      </WDS.WorkInformation>
    </WDS.MainContainer>
    { !isHide && <RequestServiceModal basePrice={basePrice} setClose={setClose} /> }
  </>
}

export default memo(WorkerDetail);