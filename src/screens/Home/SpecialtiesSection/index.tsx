import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import SpecialtyCard from '../SpecialtyCard';
import SSS from './styles';

const specialties = [
  {
    id : 1,
    name : 'Gasfitero',
    image : 'https://images.vexels.com/media/users/3/205069/isolated/preview/f207045d96c258fed664305f0ac2c5bd-icono-azul-del-auricular-del-tel--fono-by-vexels.png'
  },
  {
    id : 2,
    name : 'Electricista',
    image : 'https://images.vexels.com/media/users/3/205069/isolated/preview/f207045d96c258fed664305f0ac2c5bd-icono-azul-del-auricular-del-tel--fono-by-vexels.png'
  },
  {
    id : 3,
    name : 'Camarero',
    image : 'https://images.vexels.com/media/users/3/205069/isolated/preview/f207045d96c258fed664305f0ac2c5bd-icono-azul-del-auricular-del-tel--fono-by-vexels.png'
  },
  {
    id : 4,
    name : 'Chef',
    image : 'https://images.vexels.com/media/users/3/205069/isolated/preview/f207045d96c258fed664305f0ac2c5bd-icono-azul-del-auricular-del-tel--fono-by-vexels.png'
  }
]

const SpecialtiesSection = () => {
  return <SSS.Container>
    <FlatList 
      data={specialties}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={() => (
        <SSS.ContainerTitle>
          <SSS.TitleSection>Nuestras Especialidades</SSS.TitleSection>
        </SSS.ContainerTitle>
      )}
      renderItem={({ item }) => <SpecialtyCard title={item.name} image={item.image} />}
    />
  </SSS.Container>
}

export default SpecialtiesSection;