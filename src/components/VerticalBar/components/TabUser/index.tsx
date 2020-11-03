import { useRoute } from '@react-navigation/native';
import React from 'react';
import useActionsBar from '../../hooks/useActionsBar';
import Icon from '../../Icon';

const TabUser = () => {
  const { NavigateToContact, NavigateToHome, NavigateToSearch, NavigateToWorkDetail , NavigateToWorkerChat } = useActionsBar();
  const { name } = useRoute();

  return <>
    <Icon iconNameAntDesign="home" onPress={NavigateToHome} isSelect={name === 'home'} />
    <Icon iconNameAntDesign="search1" onPress={NavigateToSearch} isSelect={name === 'search'} />
    <Icon iconNameAntDesign="wechat" onPress={NavigateToWorkerChat} />
    <Icon iconNameAntDesign="addusergroup" onPress={NavigateToContact} isSelect={name === 'contact'} />
  </>
}

export default TabUser;