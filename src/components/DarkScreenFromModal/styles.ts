import { Dimensions } from 'react-native';
import styled from "styled-components/native";

const { width , height } = Dimensions.get('screen');

export const Container = styled.View`
  width : ${width}px;
  height: ${height}px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.5);
  justify-content: center;
  align-items: center;
`;