import React from 'react';
import { ScrollView } from 'react-native';
import HeaderNavigation from '../../components/HeaderNavigation';
import Map from './components/Map';
import WorkerList from './components/WorkerList';
import * as SMS from './styles';

const SearchMap = () => (
  <SMS.Container>
    <ScrollView>
      <SMS.HeaderContent>
        <HeaderNavigation.Title title='Los mas cercanos' /> 
        <Map /> 
      </SMS.HeaderContent>
      <WorkerList />      
    </ScrollView>
  </SMS.Container>
);

export default SearchMap;