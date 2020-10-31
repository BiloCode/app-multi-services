import React, { FC } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import { WorkerMetadata } from '../../../../redux/reducers/Worker/metadata';
import RoundedSection from '../../../../components/RoundedSection';
import EmptyContent from '../../../../components/EmptyContent';
import { ReduxRootState } from '../../../../metadata/types';
import WorkerCardList from '../WorkerCardList';

interface IProps {
  title : string;
}

const SectionContent : FC<IProps> = ({ title }) => {
  const { 
    search : { 
      workers,
      isLoadingSearch 
    } 
  } = useSelector<ReduxRootState,WorkerMetadata.IStore>(({ worker }) => worker, shallowEqual);

  return (
    <RoundedSection 
      title={title} 
      icon={<AntDesign name="filter" size={18} color="#fff" />}
      isLoading={isLoadingSearch}
    >
      {
        workers.length ? 
          <WorkerCardList list={workers} /> :
          <EmptyContent />
      }
    </RoundedSection>
  )
}

export default SectionContent;