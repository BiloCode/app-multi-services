import React from 'react';
import { NSHeaderNavigation } from './namespace';

import InputSearch from './components/InputSearch';
import Title from './components/Title';

const HeaderNavigation = {
  InputSearch : (props : NSHeaderNavigation.IPropsInputSearch) => <InputSearch {...props} />,
  Title : (props : NSHeaderNavigation.IPropsTitle) => <Title {...props} />
}

export default HeaderNavigation;