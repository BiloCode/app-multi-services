import React from 'react';
import { NSHeaderNavigation } from './namespace';

import InputSearch from './components/InputSearch';
import Title from './components/Title';
import UserData from './components/UserData';

const HeaderNavigation = {
  InputSearch : (props : NSHeaderNavigation.IPropsInputSearch) => <InputSearch {...props} />,
  Title : (props : NSHeaderNavigation.IPropsTitle) => <Title {...props} />,
  UserData : (props : NSHeaderNavigation.IPropsUserData) => <UserData {...props} />
}

export default HeaderNavigation;