import React from 'react';
import HeaderNavigation from '../../components/HeaderNavigation';
import FilterBar from './components/FilterBar';
import SectionContent from './components/SectionContent';
import useSearchInit from './hooks/useSearchInit';
import useSearchWorkerByName from './hooks/useSearchWorkerByName';
import * as SFS from './styles';

const SearchFilter = () => {
  const { FilterData , isLoadingSearch , FilterList } = useSearchInit();
  const SearchByName = useSearchWorkerByName();

  return <SFS.Container>
    <SFS.Top>
      <HeaderNavigation.InputSearch onChangeText={SearchByName} />
      <FilterBar />
    </SFS.Top>
    <SFS.Section>
      <SectionContent
        title={`Filtro : ${FilterData?.name!}`} 
        list={FilterList}
        isLoading={isLoadingSearch}
      />
    </SFS.Section>
  </SFS.Container>
}

export default SearchFilter;