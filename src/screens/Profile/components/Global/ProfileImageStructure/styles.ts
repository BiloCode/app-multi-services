import styled from "styled-components/native";

interface IContainerProps {
  size : number;
}

const setTranslateY = (size : number) : number => (size / 2) * -1;

export const Container = styled.View<IContainerProps>`
  transform : ${({ size }) => `translateY(${setTranslateY(size)}px)`};
`;

export const ContainerInformation = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 15px;
`;