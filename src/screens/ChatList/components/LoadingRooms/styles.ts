import styled from "styled-components/native";
import { colors } from "../../../../config";

export const Container = styled.View`
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const TextCompleted = styled.Text`
  color: ${colors.bgMainOpacited};
  font-size: 13px;
`;