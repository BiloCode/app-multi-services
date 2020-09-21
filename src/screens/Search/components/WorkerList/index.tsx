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
    {
      isLoading ? 
        <WLS.LoadingContainer>
          <ActivityIndicator size={32} color='#1858D4' />
        </WLS.LoadingContainer> :
        <WLS.CardsContainer>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data.map((v,i) => (
              <WorkerCard key={i} data={v} />
            ))}
          </ScrollView> 
        </WLS.CardsContainer>        
    }
  </WLS.Container>
}

export default memo(WorkerList);