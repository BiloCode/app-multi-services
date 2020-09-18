import React, { FC, memo } from 'react'
import { ScrollView } from 'react-native'
import WorkerCard from '../WorkerCard'
import WLS from './styles'

interface IProps {
  title : string;
}

const WorkerList : FC<IProps> = ({ title }) => {
  return <WLS.Container>
    <WLS.Title>{title}</WLS.Title>
    <WLS.CardsContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <WorkerCard />
        <WorkerCard />
        <WorkerCard />
      </ScrollView>      
    </WLS.CardsContainer>
  </WLS.Container>
}

export default memo(WorkerList);