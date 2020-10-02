import React from 'react';
import HeaderNavigation from '../../components/HeaderNavigation';
import SectionContent from './components/SectionContent';
import * as SFS from './styles';

const SearchFilter = () => (
  <SFS.Container>
    <SFS.Top>
      <HeaderNavigation.InputSearch />
    </SFS.Top>
    <SFS.Section>
      <SectionContent />
    </SFS.Section>
  </SFS.Container>
);

export default SearchFilter;