import { useEffect } from "react";
import { Animated , Dimensions } from "react-native";

const { width } = Dimensions.get('screen');

const useModalAnimation = () => {
  const slideRight = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(slideRight,{
      duration : 300,
      toValue : 1,
      useNativeDriver : true
    }).start();
  },[]);

  const styles = {
    transform : [
      {
        translateX : slideRight.interpolate({
          inputRange : [0,1],
          outputRange : [width,0]
        })
      }
    ]
  }
  
  return styles;
}

export default useModalAnimation;