import styled, { css } from "styled-components/native";
import { colors } from "../../../../config";

const CircleStyles = css`
  width: 380px;
  height: 380px;
  border-radius: 190px;
  position: absolute;
`;

const Height = '260px';

const TopDesignStyles = {
  Container : styled.View`
    width: 100%;
    height: ${Height};
    position: relative;
    top: 0;
    left: 0;
  `,
  CircleLeft: styled.View`
    ${CircleStyles};
    top: -140px;
    left: -95px;
    background-color: ${colors.main};
  `,
  CircleRight: styled.View`
    ${CircleStyles};
    top: -173px;
    left: 89px;
    background-color: ${colors.mainSmoothed};
  `,
  FloatingContent : styled.View`
    width: 100%;
    height: ${Height};
  `,
  TextContainer : styled.View`
    width: 80%;
    height: ${Height};
    margin: 0 auto;
    justify-content: center;
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
    padding-right: 20px;
  `,
  IconBack : styled.View`
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 25px;
  `
}

export default TopDesignStyles;