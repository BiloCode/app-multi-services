import { useRoute } from '@react-navigation/native';
import React from 'react';
import Icon from '../../Icon';

const TabWorker = () => {
  const { name } = useRoute();

  return <>
    <Icon iconNameAntDesign="home" isSelect={name === 'home'} />
    <Icon iconNameAntDesign="wechat" isSelect={name === 'chat-list'} />
  </>
}

export default TabWorker;