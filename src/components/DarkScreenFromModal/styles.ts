import { Dimensions } from 'react-native';
import styled from "styled-components/native";

const { width , height } = Dimensions.get('window');

export const Container = styled.View`
  width : ${width}px;
  height: ${height}px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.3);
`;

export const ContainerDown = styled.View({
  width,
  height,
  justifyContent: 'center',
  alignItems : 'center'
});