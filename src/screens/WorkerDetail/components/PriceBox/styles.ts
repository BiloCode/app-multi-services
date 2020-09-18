import styled, { css } from "styled-components/native";

const baseTextStyles = css`
  font-family : 'RalewayBlack';
  font-size: 12.5px;
`

const PriceBoxStyles = {
  Container : styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  PriceText : styled.Text`
    ${baseTextStyles};
    color: #1858D4;
  `,
  BaseText : styled.Text`
    ${baseTextStyles};
    color: #585858;
  `
}

export default PriceBoxStyles;