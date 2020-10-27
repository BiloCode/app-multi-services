import styled from "styled-components/native";
import { colors } from "../../../config";

export const Container = styled.View`
  background-color: #fff;
  margin-bottom: 7px;
`;

export const DropHeader = styled.View`
  width: 100%;
  height: 40px;
  background-color: ${colors.mainSmoothed};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-radius: 10px;
`;

export const DropHeaderTitle = styled.Text`
  color: #fff;
  font-family: 'RalewayBold';
  font-size: 14px;
`;