import styled, { css } from "styled-components/native";
import { colors } from "../../../../config";

//Header Information
export const Container = styled.View`
  width: 100%;
  height: 55px;
  background-color: ${colors.main};
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const IconArea = styled.View`
  width: 42px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const WorkerInformationArea = styled.View`
  flex: 1;
  height: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const WorkerFullName = styled.Text`
  font-size: 16px;
  font-family: 'RalewayBold';
  color: #fff;
  margin-right: 15px;
`;

//Work
export const WorkContainer = styled.View`
  padding: 15px;
`;

export const ExtraInformation = styled.View`
  width: 100%;
  height: 40px;
  border: 1px solid #E5E5E5;
  padding: 0 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const textStyles = css`
  font-size: 14px;
  font-family: 'RalewayBold';
`;

export const WorkName = styled.Text`
  ${textStyles};
  color: #585858;
`;

export const Price = styled.Text`
  ${textStyles};
  color: ${colors.main};
`;