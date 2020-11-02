import styled from "styled-components/native";
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  position: relative;
`;

export const ContainerIsNotJoinRoom = styled.View`
  width: ${width}px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0,0,0,.1);
  justify-content: center;
  align-items: center;
`;