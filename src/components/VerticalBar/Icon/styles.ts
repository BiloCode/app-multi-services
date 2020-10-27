import styled, { css } from "styled-components/native";
import { colors } from "../../../config";


const flex = css`
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  width: 100%;
  height: 75px;
  ${flex}
`;

interface ICircleProps {
  isSelect? : boolean;
}

export const Circle = styled.View<ICircleProps>`
  width : 56px;
  height : 56px;
  border-radius : 28px;
  ${flex}

  ${({ isSelect }) => isSelect && css`
    background-color: ${colors.main};
    /* transform: translateX(20px); */
  `}
`;

export const WhiteCircle = styled.View<ICircleProps>`
  width : 42px;
  height : 42px;
  border-radius : 21px;
  ${flex}

  ${({ isSelect }) => isSelect && css`
    background-color : #fff;
  `}
`;