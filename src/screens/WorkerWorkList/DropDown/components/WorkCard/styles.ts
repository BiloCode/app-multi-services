import styled from "styled-components/native";
import { colors } from "../../../../../config";

const radius = 15,
  padding = 15;

export const Container = styled.View`
  width: 100%;
  height: 60px;
  border-radius: ${radius}px;
  background-color: ${colors.bgMainOpacited};
  flex-direction: row;
  margin-bottom: 5px;
`;

export const AvatarContainer = styled.View`
  padding: 0 ${padding}px;
  justify-content: center;
`;

export const WorkInformation = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  padding-right: ${padding}px;
`;

export const WorkTitle = styled.Text`
  color: #000;
  font-family: 'RalewayBold';
  font-size: 13px;
`;

export const WorkPrice = styled.Text`
  color: ${colors.main};
  font-family: 'RalewayBlack';
  font-size: 15px;
  margin-top: 2px;
`;

export const ActionGestureZone = styled.View`
  width: 35px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.main};
  border-top-right-radius: ${radius}px;
  border-bottom-right-radius: ${radius}px;
`;