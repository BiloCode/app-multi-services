import styled, { css } from "styled-components/native";

interface IContainerProps {
  isRight? : boolean;
}

export const Container = styled.View<IContainerProps>`
  max-width: 80%;
  padding: 10px 15px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #DADADA;
  margin-bottom: 5px;
  align-self: flex-start;

  ${({ isRight }) => isRight && css`
    align-self: flex-end;
  `}
`;

export const Message = styled.Text`
  color: #8B8B8B;
  font-size: 10px;
  font-family : 'RalewaySemiBold';
`;