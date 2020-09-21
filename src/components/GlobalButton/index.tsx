import React, { FC, memo } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import GlobalButtonStyles from './styles';

interface IProps {
  horizontalSize? : string;
  backgroundColor? : string;
  textColor? : string;
  text : string;
  onPress?() : void;
  isLoading? : boolean;
}

const GlobalButton : FC<IProps> = ({ text , horizontalSize , textColor , onPress , backgroundColor, isLoading }) => {
  if(isLoading) return <GlobalButtonStyles.Container horizontalSize={horizontalSize!}>
    <ActivityIndicator color='#fff' size={15} />
  </GlobalButtonStyles.Container>

  return (
    <GlobalButtonStyles.Container 
      as={TouchableOpacity}
      horizontalSize={horizontalSize!} 
      backgroundColor={backgroundColor}
      onPress={onPress}
    >
      <GlobalButtonStyles.Text textColor={textColor} >{text}</GlobalButtonStyles.Text>
    </GlobalButtonStyles.Container>
  )
}

GlobalButton.defaultProps = {
  horizontalSize : '100%'
}

export default memo(GlobalButton);