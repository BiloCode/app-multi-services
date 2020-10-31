import React from 'react';
import BackgroundGradient from '../../components/BackgroundGradient';
import HeaderNavigation from '../../components/HeaderNavigation';
import FilterBar from './components/FilterBar';
import SectionContent from './components/SectionContent';
import useSearchInit from './hooks/useSearchInit';
import useSearchWorkerByName from './hooks/useSearchWorkerByName';
import * as SFS from './styles';

const SearchFilter = () => {
  const { filterTitle } = useSearchInit();
  const { ChangeSearchValue , SearchStart } = useSearchWorkerByName();

  return <SFS.Container>
    <BackgroundGradient />
    <SFS.Top>
      <HeaderNavigation.InputSearch onChangeText={ChangeSearchValue} />
      <FilterBar />
    </SFS.Top>
    <SFS.Section>
      <SectionContent title={filterTitle} />
    </SFS.Section>
  </SFS.Container>
}

export default SearchFilter;