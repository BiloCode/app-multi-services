import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  margin-bottom: 7px;
`;

export const DropHeader = styled.View`
  width: 100%;
  height: 40px;
  background-color: blue;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-radius: 15px;
`;

export const DropHeaderTitle = styled.Text`
  color: #fff;
  font-family: 'RalewayBold';
  font-size: 14px;
`;