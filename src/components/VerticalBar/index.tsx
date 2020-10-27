import React, { FC } from 'react';
import Icon from './Icon';
import Styled from './styles';
import TabUser from './components/TabUser';
import useInitBar from './hooks/useInitBar';
import TabWorker from './components/TabWorker';

const VerticalBar : FC = ({ children }) => {
  const { 
    CloseSession,
    NavigateToProfile,
    userAuthenticatioState
  } = useInitBar();

  return (
    <Styled.Container>
      <Styled.Bar>
        <Styled.BarHeader>
          <Icon iconNameAntDesign="user" onPress={NavigateToProfile} />
        </Styled.BarHeader>
        <Styled.BarSection>
          { userAuthenticatioState === 'authentication-user' ? <TabUser /> : <TabWorker /> }
        </Styled.BarSection>
        <Styled.BarFooter>
          <Icon iconNameAntDesign="back" onPress={CloseSession} />
        </Styled.BarFooter>
      </Styled.Bar>
      <Styled.Content>
        {children}
      </Styled.Content>
    </Styled.Container>
  );
}

export default VerticalBar;