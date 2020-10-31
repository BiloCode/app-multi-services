import React, { FC } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import RoundedSection from '../../../../components/RoundedSection';
import GlobalWorkerCard from '../../../../components/GlobalWorkerCard';
import useWorkerListInit from './hooks/useWorkerListInit';

interface IProps {
  ubicationName : string
}

const WorkerList : FC<IProps> = ({ ubicationName }) => {
  const { isLoadingWorkers , workers } = useWorkerListInit();

  return <RoundedSection
    title={ubicationName}
    icon={<EvilIcons name="location" size={24} color="#fff" />}
    isLoading={isLoadingWorkers}
  >
    {
      workers.map((v,i) => (
        <GlobalWorkerCard key={i} workerData={v} />
      ))
    }      
  </RoundedSection>  
}



export default WorkerList;