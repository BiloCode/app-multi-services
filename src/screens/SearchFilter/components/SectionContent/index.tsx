import React, { FC } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator, ScrollView } from 'react-native';

import GlobalWorkerCard from '../../../../components/GlobalWorkerCard';
import { WorkerMetadata } from '../../../../redux/reducers/Worker/metadata';
import RoundedSection from '../../../../components/RoundedSection';

interface IProps {
  title : string;
  isLoading : boolean;
  list : WorkerMetadata.IWorker[];
}

const SectionContent : FC<IProps> = ({ title , list , isLoading }) => (
  <RoundedSection 
    title={title} 
    icon={<AntDesign name="filter" size={18} color="#fff" />}
    isLoading={isLoading}
  >
    {
      <ScrollView>
        {
          list.map((v,i) => (
            <GlobalWorkerCard key={i} workerData={v} />
          ))
        }
      </ScrollView> 
    }
  </RoundedSection>
)

export default SectionContent;