import React, { memo } from 'react';
import { ScrollView } from 'react-native';
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
import useFinishWork from './hooks/useFinishWork';

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
    puntuaction,
    MessageButton,
    workState,
    isWorkStateLoading
  } = useParamsWorkerDetail();

  const { isHide , setClose , openModal } = useRequestServiceModal(availability);
  const finishWork = useFinishWork();
  
  const BottomButton = () => {
    if(workState.state === 'pendient') {
      finishWork();
      return;
    }else if(workState.state === 'waiting-confirmation'){
      alert('Esperando la confirmacion de la solicitud.')
      return;
    }
    
    openModal();
  }

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
          <GlobalButton text={MessageButton()} isLoading={isWorkStateLoading} onPress={BottomButton} />
        </WDS.MarginVerticalContainer>
      </WDS.WorkInformation>
    </WDS.MainContainer>
    { !isHide && <RequestServiceModal basePrice={basePrice} setClose={setClose} /> }
  </>
}

export default memo(WorkerDetail);