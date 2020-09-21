import styled, { css } from "styled-components/native";

const CircleStyles = css`
  width: 380px;
  height: 380px;
  border-radius: 190px;
  position: absolute;
`;

const TopDesignStyles = {
  Container : styled.View`
    width: 100%;
    height: 250px;
    position: relative;
    top: 0;
    left: 0;
  `,
  CircleLeft: styled.View`
    ${CircleStyles};
    top: -140px;
    left: -95px;
    background-color: #1858D4;
  `,
  CircleRight: styled.View`
    ${CircleStyles};
    top: -173px;
    left: 89px;
    background-color: #296CEF;
  `,
  FloatingContent : styled.View`
    width: 100%;
    height: 250px;
    justify-content: center;
    padding: 0 40px;
  `,
  TextTitle : styled.Text`
    font-family: 'RalewayBlack';
    font-size: 24px;
    color: #fff;
    margin: 12px 0;
  `,
  TextDescription : styled.Text`
    font-family: 'RalewayBold';
    font-size: 12px;
    color: #fff;
  `,
  IconBack : styled.View`
    position: absolute;
    top: 0;
    left: 0;
    padding: 25px;
  `
}

export default TopDesignStyles;