import React from 'react';
import HeaderNavigation from '../../components/HeaderNavigation';
import FilterBar from './components/FilterBar';
import SectionContent from './components/SectionContent';
import * as SFS from './styles';

const SearchFilter = () => (
  <SFS.Container>
    <SFS.Top>
      <HeaderNavigation.InputSearch />
      <FilterBar />
    </SFS.Top>
    <SFS.Section>
      <SectionContent />
    </SFS.Section>
  </SFS.Container>
);

export default SearchFilter;