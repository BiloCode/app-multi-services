import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ContainerIcon = styled.View`
  width: 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
`;

export const Input = styled.TextInput`
  flex: 1;
  border-radius: 18px;
  font-size: 13px;
  font-family: 'RalewayBold';
`;

export const ButtonContainer = styled.View`
  width: 40px;
  height: 100%;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-top-right-radius : 18px;
  border-bottom-right-radius: 18px;
`;