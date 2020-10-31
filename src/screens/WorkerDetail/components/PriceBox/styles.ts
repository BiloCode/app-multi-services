import styled, { css } from "styled-components/native";
import { colors } from "../../../../config";

const baseTextStyles = css`
  font-family : 'RalewayBlack';
  font-size: 14px;
`

const PriceBoxStyles = {
  Container : styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  PriceText : styled.Text`
    ${baseTextStyles};
    color: ${colors.main};
    font-size: 13px;
  `,
  BaseText : styled.Text`
    ${baseTextStyles};
    color: black;
  `
}

export default PriceBoxStyles;