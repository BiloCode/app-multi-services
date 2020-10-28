import { useRoute } from '@react-navigation/native';
import React from 'react';
import useActionsTabWorker from '../../hooks/useActionTabWorker';
import Icon from '../../Icon';

const TabWorker = () => {
  const { name } = useRoute();
  const { NavigateToHome , NavigateToUserChat , NavigateToWorkList } = useActionsTabWorker();

  return <>
    <Icon iconNameAntDesign="home" onPress={NavigateToHome} isSelect={name === 'home'} />
    <Icon iconNameAntDesign="profile" onPress={NavigateToWorkList} isSelect={name === 'work-list'} />
    <Icon iconNameAntDesign="wechat" onPress={NavigateToUserChat} />
  </>
}

export default TabWorker;