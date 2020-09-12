import styled from "styled-components/native";

const VerticalBarStyles = {
  Container : styled.View`
    flex: 1;
    flex-direction: row;
  `,
  Bar : styled.View`
    width: 75px;
    padding-top: 24px;
    height: 100%;
    background-color: #1858D4;
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
    padding-top: 24px;
    padding-left: 15px;
    background-color: #FAFAFA;
  `
}

export default VerticalBarStyles;