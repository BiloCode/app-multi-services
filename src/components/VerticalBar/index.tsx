import React, { FC } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Icon from './Icon';
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

  return (
    <VerticalBarStyles.Container>
      <VerticalBarStyles.Bar>
        <VerticalBarStyles.BarHeader>
          <Icon content={<AntDesign name="user" size={24} color="#fff" />} onPress={NavigateToProfile} />
        </VerticalBarStyles.BarHeader>
        <VerticalBarStyles.BarSection>
          <Icon content={<AntDesign name="home" size={24} color="#fff" />} onPress={NavigateToHome} />
          <Icon content={<AntDesign name="search1" size={24} color="#fff" />} onPress={NavigateToSearch} />
          <Icon content={<AntDesign name="profile" size={24} color="#fff" />} onPress={NavigateToWorkDetail} />
          <Icon content={<AntDesign name="phone" size={24} color="#fff" />} onPress={NavigateToContact} />
        </VerticalBarStyles.BarSection>
        <VerticalBarStyles.BarFooter>
          <Icon content={<AntDesign name="back" size={28} color="#fff" />} onPress={CloseSession} />
        </VerticalBarStyles.BarFooter>
      </VerticalBarStyles.Bar>
      <VerticalBarStyles.Content>
        {children}
      </VerticalBarStyles.Content>
    </VerticalBarStyles.Container>
  );
}

export default VerticalBar;