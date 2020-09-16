import React from 'react';
import { FlatList } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { ReduxRootState } from '../../../metadata/types';
import { SpecialtyMetadata } from '../../../redux/reducers/Specialty/metadata';
import SpecialtyCard from '../SpecialtyCard';
import SSS from './styles';

const SpecialtiesSection = () => {
  const {
    list 
  } = useSelector<ReduxRootState,SpecialtyMetadata.IStore>(({ specialties }) => specialties, shallowEqual);

  const filterList = list.slice(0,4);

  return <SSS.Container>
    <FlatList 
      data={filterList}
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