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
  align-items: flex-end;
`;

export const DropHeaderTitle = styled.Text`
  color: #fff;
  font-family: 'RalewayBold';
  font-size: 14px;
  margin-left: 6px;
`;

export const WorksIndicatorContainer = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const WorksIndicator = styled.Text`
  color: ${colors.main};
  font-size: 10px;
`;

export const CenterSpinner = styled.View`
  align-self : center;
`;