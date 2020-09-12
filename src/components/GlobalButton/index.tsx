import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import GlobalButtonStyles from './styles';

interface IProps {
  horizontalSize? : string;
  text : string;
  onPress?() : void;
}

const GlobalButton : FC<IProps> = ({ text , horizontalSize , onPress }) => (
  <GlobalButtonStyles.Container 
    as={TouchableOpacity}
    horizontalSize={horizontalSize!} 
    onPress={onPress}
  >
    <GlobalButtonStyles.Text>{text}</GlobalButtonStyles.Text>
  </GlobalButtonStyles.Container>
)

GlobalButton.defaultProps = {
  horizontalSize : '100%'
}

export default GlobalButton;