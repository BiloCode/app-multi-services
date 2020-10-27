import styled from "styled-components/native";
import { colors } from "../../../../config";

const SmallButtonStyles = {
  Button : styled.View`
    width: 130px;
    height: 26px;
    border-radius: 13px;
    background-color: ${colors.main};
    align-items: center;
    justify-content: center;
  `,
  ButtonText : styled.Text`
    font-family: 'RalewayExtraBold';
    font-size: 10px;
    color: #fff;
    text-align: center;
  `,
}

export default SmallButtonStyles;