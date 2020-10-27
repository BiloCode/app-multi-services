import styled from "styled-components/native";
import { colors } from "../../../../config";

export const Container = styled.View`
  width: 48%;
  height: 28px;
  background-color: ${colors.main};
  border-radius: 14px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-family: 'RalewayBold';
  font-size: 12px;
  color: #fff;
`;