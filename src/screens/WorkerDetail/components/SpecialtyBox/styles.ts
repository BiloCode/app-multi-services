import styled from "styled-components/native";
import { colors } from "../../../../config";

const SpecialtyBoxStyles = {
  Container : styled.View`

  `,
  StarContainer : styled.View`
    flex-direction: row;
  `,
  SpecialtyText : styled.Text`
    font-size: 16px;
    font-family: 'RalewayBlack';
    color: ${colors.main};
    margin-bottom: 6px;
  `
}

export default SpecialtyBoxStyles;