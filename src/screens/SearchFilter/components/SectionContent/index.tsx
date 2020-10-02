import React from 'react';
import * as SCS from './styles';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import faker from 'faker';

import GlobalWorkerCard from '../../../../components/GlobalWorkerCard';
import { WorkerMetadata } from '../../../../redux/reducers/Worker/metadata';

const workers : WorkerMetadata.IWorker[] = [
  {
    id : 1,
    availability : 'available',
    backgroundImage : '',
    basePrice : 16,
    createdAt : new Date(),
    location : '',
    puntuaction : 4,
    specialty : {
      name : 'Desarrollo de Sistemas'
    },
    user : {
      name : 'Billy',
      lastname : 'Paredes Aycho',
      description : faker.lorem.words(30),
      district : {
        name : 'Lima',
        province : {
          name : 'Rimac'
        }
      },
      profileImage : 'https://hipertextual.com/files/2020/05/hipertextual-nuevo-pokemon-go-es-hacer-que-tus-pokemon-se-vean-mas-reales-2020697065.jpg'
    }
  }
]

const SectionContent = () => (
  <SCS.Container>
    <SCS.FilterName>
      <AntDesign name="filter" size={18} color="#fff" />
      <SCS.FilterText>Desarrollo de Software</SCS.FilterText>
    </SCS.FilterName>
    <SCS.List>
      <ScrollView>
        {
          workers.map((v,i) => <GlobalWorkerCard key={i} workerData={v} />)
        }
      </ScrollView>      
    </SCS.List>
  </SCS.Container>
)

export default SectionContent;