import styled from "styled-components/native";

export const Container = styled.View`
  flex : 1;
  background-color: blue;
  padding-top: 24px;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 180px;
`;

const radius = 30;

export const ProfileInformationContainer = styled.View`
  flex: 1;
  border-top-left-radius: ${radius}px;
  border-top-right-radius: ${radius}px;
  background-color: #fff;
`;

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

export const Specialty = styled.Text`
  font-size: 14px;
  font-family: 'RalewaySemiBold';
`;

export const Price = styled.Text`
  font-size: 18px;
  font-family: 'RalewayBlack';
  color: blue;
`;

export const ContainerButton = styled.View`
  margin-top: 35px;
`;