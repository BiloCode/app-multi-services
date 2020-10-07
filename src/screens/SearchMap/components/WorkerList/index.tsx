import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import RoundedSection from '../../../../components/RoundedSection';
import GlobalWorkerCard from '../../../../components/GlobalWorkerCard';
import useWorkerListInit from './hooks/useWorkerListInit';
import { ScrollView } from 'react-native';

const WorkerList = () => {
  const { isLoadingWorkers , workers } = useWorkerListInit();

  return <RoundedSection
    title='Rimac / Surquillo'
    icon={<EvilIcons name="location" size={24} color="#fff" />}
  >
    {
      workers.map((v,i) => (
        <GlobalWorkerCard key={i} workerData={v} />
      ))
    }      
  </RoundedSection>  
}



export default WorkerList;