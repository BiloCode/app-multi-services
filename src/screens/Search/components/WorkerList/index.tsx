import React, { FC, memo } from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { WorkerMetadata } from '../../../../redux/reducers/Worker/metadata'
import WorkerCard from '../WorkerCard'
import WLS from './styles'

interface IProps {
  isLoading : boolean;
  title : string;
  data : WorkerMetadata.IWorker[];
}

const WorkerList : FC<IProps> = ({ title , data , isLoading }) => {
  return <WLS.Container>
    <WLS.Title>{title}</WLS.Title>
    <WLS.CardsContainer>
      {
        isLoading ? 
          <ActivityIndicator color='#1858D4' /> : 
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data.map((v,i) => (
              <WorkerCard key={i} data={v} />
            ))}
          </ScrollView> 
      }     
    </WLS.CardsContainer>
  </WLS.Container>
}

export default memo(WorkerList);