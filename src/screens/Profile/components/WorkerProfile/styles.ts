import styled from "styled-components/native";
import { colors } from "../../../../config";

export const ContainerText = styled.View`
  width: 85%;
  margin: 0 auto;
  flex: 1;
`;

export const WorkInformation = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 15px;
`;

export const SpecialtyContainer = styled.View({
  flexDirection : 'row',
  alignItems : 'center'
});

export const Specialty = styled.Text`
  font-size: 16px;
  font-family: 'RalewayBold';
  margin-left: 5px;
  color: ${colors.main}
`;

export const Price = styled.Text`
  font-size: 18px;
  font-family: 'RalewayBlack';
  color: ${colors.main};
`;

export const ContainerButton = styled.View`
  margin-top: 35px;
`;