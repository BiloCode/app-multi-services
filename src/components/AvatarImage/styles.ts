import styled from "styled-components/native";
import { colors } from "../../config";

interface IImageProps {
  size : number;
}

export const Container = styled.View<IImageProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size ? (size / 2) : 0}px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: ${colors.bgMainOpacited};
`;

export const Image = styled.Image<IImageProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;