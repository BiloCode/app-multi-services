import React, { useState } from 'react';
import faker from 'faker';
import MainDescription from '../../components/MainDescription';
import MainTitle from '../../components/MainTitle';
import ModalSearch from '../../components/ModalSearch';
import VerticalBar from '../../components/VerticalBar';
import { ScrollView, TouchableOpacity } from 'react-native';
import SS from './styles';
import WorkerList from './components/WorkerList';
import SmallButton from './components/SmallButton';

const Search = () => {
  const [ modalActive , setModalActive ] = useState<boolean>(false);
  const openModal = () => setModalActive(() => true);
  const closeModal = () => setModalActive(() => false);

  return <>
    <VerticalBar>
      <SS.Container>
        <ScrollView showsVerticalScrollIndicator={false} >
          <MainTitle text='Especialistas Cerca a Ti' />
          <MainDescription text={faker.lorem.words(15)} />    
          <SmallButton onPress={openModal} text='Selecciona un filtro' />
          <SS.WorkersContainer>
            <WorkerList title='Los mas Destacados' />
            <WorkerList title='Mejores Puntuados' />          
          </SS.WorkersContainer>
        </ScrollView>        
      </SS.Container>
    </VerticalBar>
    { modalActive && <ModalSearch onClose={closeModal} /> }
  </>
}

export default Search;