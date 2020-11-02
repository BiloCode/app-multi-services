import React from 'react';
import { ScrollView } from 'react-native';
import HeaderNavigation from '../../components/HeaderNavigation';
import useUserSignInData from '../../hooks/useUserSignInData';
import Map from './components/Map';
import WorkerList from './components/WorkerList';
import * as SMS from './styles';

const SearchMap = () => {
  const { district } = useUserSignInData();

  return <SMS.Container>
    <ScrollView>
      <SMS.HeaderContent>
        <HeaderNavigation.Title title='Los mas cercanos' /> 
        <Map province={district.province.name} coords={district.province.location} /> 
      </SMS.HeaderContent>
      <WorkerList ubicationName={district.name + ' / ' + district.province.name} />      
    </ScrollView>
  </SMS.Container>
};

export default SearchMap;