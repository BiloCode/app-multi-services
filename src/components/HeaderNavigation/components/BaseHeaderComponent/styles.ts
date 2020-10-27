import styled, { css } from "styled-components/native";
import { colors } from "../../../../config";

const BaseStyles = css`
  height: 38px;
  border-radius: 18px;
  background-color: ${colors.mainSmoothed};
`;

export const Container = styled.View`
  width: 90%;
  margin: 20px auto;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconBackContainer = styled.View`
  width: 48px;
  justify-content: center;
  align-items: center;
  ${BaseStyles};
`;

export const RightContent = styled.View`
  flex: 1;
  margin-left: 5%;
  ${BaseStyles};
`;