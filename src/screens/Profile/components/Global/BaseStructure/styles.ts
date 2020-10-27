import styled from "styled-components/native";
import { colors } from "../../../../../config";

export const Container = styled.View`
  flex : 1;
  background-color: ${colors.main};
  padding-top: 24px;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 180px;
`;

const borderRadius = 30;

export const ProfileInformationContainer = styled.View`
  flex: 1;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background-color: #fff;
`;