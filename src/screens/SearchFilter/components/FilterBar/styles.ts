import styled, { css } from "styled-components/native";

const BasicStyles = css`
  height: 100%;
  justify-content: center;
`;

export const Container = styled.View`
  width: 90%;
  height: 38px;
  margin: 10px auto;
  border-radius: 19px;
  border: 1px solid #588FFA;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  width: 60px;
  border-right-width: 1px;
  border-right-color: #588FFA;
  align-items: center;
  ${BasicStyles};
`;

export const TextContainer = styled.View`
  ${BasicStyles};
  flex: 1;
  padding: 0 30px;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: 'RalewayBold';
  font-size: 13px;
`;