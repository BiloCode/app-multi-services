import React, { FC } from 'react';
import Icon from './Icon';

import { useRoute } from '@react-navigation/native'
import VerticalBarStyles from './styles';
import useActionsBar from './hooks/useActionsBar';

const VerticalBar : FC = ({ children }) => {
  const { 
    CloseSession,
    NavigateToContact,
    NavigateToHome,
    NavigateToProfile,
    NavigateToSearch,
    NavigateToWorkDetail
  } = useActionsBar();

  const { name } = useRoute();

  return (
    <VerticalBarStyles.Container>
      <VerticalBarStyles.Bar>
        <VerticalBarStyles.BarHeader>
          <Icon iconNameAntDesign="user" onPress={NavigateToProfile} />
        </VerticalBarStyles.BarHeader>
        <VerticalBarStyles.BarSection>
          <Icon iconNameAntDesign="home" onPress={NavigateToHome} isSelect={name === 'home'} />
          <Icon iconNameAntDesign="search1" onPress={NavigateToSearch} isSelect={name === 'search'} />
          <Icon iconNameAntDesign="profile" onPress={NavigateToWorkDetail} isSelect={name === 'work-list'} />
          <Icon iconNameAntDesign="wechat" onPress={NavigateToWorkDetail} isSelect={name === 'chat-list'} />
          <Icon iconNameAntDesign="phone" onPress={NavigateToContact} isSelect={name === 'contact'} />
        </VerticalBarStyles.BarSection>
        <VerticalBarStyles.BarFooter>
          <Icon iconNameAntDesign="back" onPress={CloseSession} />
        </VerticalBarStyles.BarFooter>
      </VerticalBarStyles.Bar>
      <VerticalBarStyles.Content>
        {children}
      </VerticalBarStyles.Content>
    </VerticalBarStyles.Container>
  );
}

export default VerticalBar;