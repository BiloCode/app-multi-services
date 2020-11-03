import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get('window');

export const Container = styled.View({
  width: width * 0.85,
  backgroundColor: '#fff',
  borderRadius: 25,
  padding : 30
});

export const Title = styled.Text`
  font-size: 22px;
  font-family: 'RalewayBlack';
  text-align: center;
  margin-bottom: 15px;
`;

interface IButtonContainerProps {
  marginTop : number;
}

export const ButtonContainer = styled.View<IButtonContainerProps>(props => ({
  marginTop: props.marginTop
}))