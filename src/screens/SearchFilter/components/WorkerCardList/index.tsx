import React, { FC, memo } from 'react';
import { ScrollView } from 'react-native';

import GlobalWorkerCard from '../../../../components/GlobalWorkerCard';
import { WorkerMetadata } from '../../../../redux/reducers/Worker/metadata';

interface IProps {
  list : WorkerMetadata.IWorker[]
}

const WorkerCardList : FC<IProps> = ({ list }) => (
  <ScrollView showsVerticalScrollIndicator={false} >
    {
      list.map((v,i) => (
        <GlobalWorkerCard key={i} workerData={v} />
      ))
    }
  </ScrollView>
);

export default memo(WorkerCardList);