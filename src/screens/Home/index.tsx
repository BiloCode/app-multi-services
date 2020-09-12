import React from 'react';
import { Text } from 'react-native'
import VerticalBar from '../../components/VerticalBar';
import HomeStyles from './styles';

const Home = () => {
  return <VerticalBar>
    <HomeStyles.Container>
      <Text>aolas</Text>
    </HomeStyles.Container>
  </VerticalBar>
}

export default Home;