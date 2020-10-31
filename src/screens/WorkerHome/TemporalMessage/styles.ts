import styled from "styled-components/native";
import { colors } from "../../../config";

export const Container = styled.View`
  flex : 1;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  color: ${colors.main};
  font-size: 16px;
  font-family: 'RalewayBold';
  text-align: center;
  margin-top: 10px;
`;