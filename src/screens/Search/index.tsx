import React, { useState } from 'react';
import faker from 'faker';
import MainDescription from '../../components/MainDescription';
import MainTitle from '../../components/MainTitle';
import SearchModal from '../../components/SearchModal';
import VerticalBar from '../../components/VerticalBar';
import { ScrollView } from 'react-native';
import SS from './styles';
import WorkerList from './components/WorkerList';
import SmallButton from './components/SmallButton';
import useSearchInit from './hooks/useSearchInit';

const Search = () => {
  const [ modalActive , setModalActive ] = useState<boolean>(false);
  const openModal = () => setModalActive(() => true);
  const closeModal = () => setModalActive(() => false);

  const { workersNearest , workersNearestLoading , workersNew , workersNewLoading } = useSearchInit();

  return <>
    <VerticalBar>
      <SS.Container>
        <ScrollView showsVerticalScrollIndicator={false} >
          <MainTitle text='Expertos muy Cerca a Ti' />
          <MainDescription text='Siempre tendrás un experto cerca de tu domicilio y lo encontrarás aquí.' />    
          <SmallButton onPress={openModal} text='Buscar' />
          <SS.WorkersContainer>
            <WorkerList 
              title='Nuevos Especialistas' 
              data={workersNew}
              isLoading={workersNewLoading}
            />
            <WorkerList
              title='Los mas Cercanos a Ti' 
              data={workersNearest}
              isLoading={workersNearestLoading} 
            />          
          </SS.WorkersContainer>
        </ScrollView>        
      </SS.Container>
    </VerticalBar>
    { modalActive && <SearchModal onClose={closeModal} /> }
  </>
}

export default Search;