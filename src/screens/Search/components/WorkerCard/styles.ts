import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 190px;
  background-color: #FFF;
  margin-right: 10px;
  border-radius: 20px;
  align-items: center;
  border: 1px solid rgb(240,240,240);
`;

export const InformationContainer = styled.View`
  margin: 15px 0;
`;

export const ButtonContainer = styled.View`
  padding-bottom: 20px;
`;

export const WorkerName = styled.Text`
  font-family: 'RalewayExtraBold';
  font-size: 13px;
  color: #585858;
  text-align: center;
  padding: 0 15px;
`;

export const Specialty = styled.Text`
  font-family: 'RalewaySemiBold';
  font-size: 9px;
  color: #8B8B8B;
  text-align: center;
  margin: 3px 0;
`;

export const StarContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

//Image Profile
const ImageStyles = css`
  width: 100%;
  height: 125px;
  border-top-left-radius : 20px;
  border-top-right-radius: 20px;
`;

export const ImageProfileContainer = styled.View`
  ${ImageStyles}
  justify-content: center;
  align-items: center;
  background-color: rgb(253,253,253);
`;

export const ImageProfile = styled.Image`
  ${ImageStyles}
`;

export const Icon = styled.View`
  width: 70px;
  height: 70px;
  background-color: rgb(240,240,240);
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;