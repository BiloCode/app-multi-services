import { useRoute } from '@react-navigation/native';
import React from 'react';
import useActionsBar from '../../hooks/useActionsBar';
import Icon from '../../Icon';

const TabUser = () => {
  const { NavigateToContact, NavigateToHome, NavigateToSearch, NavigateToWorkDetail } = useActionsBar();
  const { name } = useRoute();

  return <>
    <Icon iconNameAntDesign="home" onPress={NavigateToHome} isSelect={name === 'home'} />
    <Icon iconNameAntDesign="search1" onPress={NavigateToSearch} isSelect={name === 'search'} />
    <Icon iconNameAntDesign="profile" onPress={NavigateToWorkDetail} isSelect={name === 'work-list'} />
    <Icon iconNameAntDesign="wechat" onPress={NavigateToWorkDetail} isSelect={name === 'chat-list'} />
    <Icon iconNameAntDesign="phone" onPress={NavigateToContact} isSelect={name === 'contact'} />
  </>
}

export default TabUser;