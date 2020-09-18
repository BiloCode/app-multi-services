import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';
import GlobalButtonStyles from './styles';

interface IProps {
  horizontalSize? : string;
  backgroundColor? : string;
  textColor? : string;
  text : string;
  onPress?() : void;
}

const GlobalButton : FC<IProps> = ({ text , horizontalSize , textColor , onPress , backgroundColor }) => (
  <GlobalButtonStyles.Container 
    as={TouchableOpacity}
    horizontalSize={horizontalSize!} 
    backgroundColor={backgroundColor}
    onPress={onPress}
  >
    <GlobalButtonStyles.Text textColor={textColor} >{text}</GlobalButtonStyles.Text>
  </GlobalButtonStyles.Container>
)

GlobalButton.defaultProps = {
  horizontalSize : '100%'
}

export default memo(GlobalButton);