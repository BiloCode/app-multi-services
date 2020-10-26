import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get('window');
const iconSize = 36;
const setTranslateX = (size : number) : number => (width / 2) - (size / 2);

interface IContainerProps {
  size : number;
}

export const Container = styled.View<IContainerProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  transform: ${({ size }) => `translateX(${setTranslateX(size)}px)`};
  position: relative;
`;

export const EditIconContainer = styled.View`
  width: ${iconSize}px;
  height: ${iconSize}px;
  border-radius: ${iconSize / 2}px;
  background-color: blue;
  position: absolute;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;