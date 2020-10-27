import styled from "styled-components/native";
import { colors } from "../../config";

const VerticalBarStyles = {
  Container : styled.View`
    flex: 1;
    flex-direction: row;
  `,
  Bar : styled.View`
    width: 60px;
    padding-top: 24px;
    height: 100%;
    background-color: ${colors.main};
  `,
  BarHeader : styled.View`
    height: 75px;
  `,
  BarSection: styled.View`
    flex: 1;
    margin-top: 25px;
  `,
  BarFooter : styled.View`
    height: 75px;
  `,
  Content : styled.View`
    flex: 1;
    padding: 0 20px;
    padding-top: 24px;
    background-color: #FAFAFA;
  `
}

export default VerticalBarStyles;