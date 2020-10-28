import styled, { css } from "styled-components/native";
import { colors } from "../../../../../config";

interface IContainerProps {
  isRight? : boolean;
}

export const Container = styled.View<IContainerProps>`
  max-width: 80%;

  ${({ isRight }) => isRight && css`
    align-self: flex-end;
  `}
`;

interface IMessageProps {
  isHide? : boolean;
}

export const MessageContainer = styled.View<IMessageProps>`
  padding: 10px 15px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #DADADA;
  align-self: flex-end;
  margin-bottom : ${({ isHide }) => isHide ? '8px' : '5px'};
`;

export const Message = styled.Text`
  color: #1f1f1f;
  font-size: 11px;
`;

export const Date = styled.Text`
  font-size: 9px;
  font-family : 'RalewayBold';
  color : ${colors.main};
  margin-bottom: 8px;
  text-align: right;
`;