import styled from "styled-components/native";
import { colors } from "../../../../../config";

export const WorkInformation = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: rgb(230,230,230);
`;

export const SpecialtyContainer = styled.View({
  flexDirection : 'row',
  alignItems : 'center'
});

export const Specialty = styled.Text`
  font-size: 16px;
  font-family: 'RalewayBold';
  margin-left: 5px;
  color: ${colors.main};
`;

export const Price = styled.Text`
  font-size: 18px;
  font-family: 'RalewayBlack';
  color: ${colors.main};
`;