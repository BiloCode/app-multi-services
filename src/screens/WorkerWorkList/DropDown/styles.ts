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

export const DropHeaderTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DropHeaderTitle = styled.Text`
  color: #fff;
  font-family: 'RalewayBold';
  font-size: 14px;
`;

export const WorksIndicatorContainer = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #fff;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;

export const WorksIndicator = styled.Text`
  color: ${colors.main};
  font-size: 12px;
`;