import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import GlobalWorkerCard from '../../../../components/GlobalWorkerCard';
import * as SCS from './styles';

const workers = new Array(3).fill('');

const SectionContent = () => (
  <SCS.Container>
    <SCS.FilterName>
      <AntDesign name="filter" size={18} color="#fff" />
      <SCS.FilterText>Desarrollo de Software</SCS.FilterText>
    </SCS.FilterName>
    <SCS.List>
      <ScrollView>
        {
          workers.map((v,i) => <GlobalWorkerCard key={i} puntuaction={3} />)
        }
      </ScrollView>      
    </SCS.List>
  </SCS.Container>
)

export default SectionContent;