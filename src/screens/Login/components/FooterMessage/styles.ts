import styled from "styled-components/native";
import { colors } from "../../../../config";

const FooterMessageStyles = {
  Container : styled.View`
    width: 100%;
    margin-top: 25px;
    flex-direction: row;
    justify-content: center;
  `,
  NotLink : styled.Text`
    font-size: 10px;
    color: ${colors.text};
    font-family: 'RalewayMedium';
  `,
  Link : styled.Text`
    margin-left: 5px;
    color: ${colors.main};
    font-size: 11px;
    font-family : 'RalewayBold';
  `
}

export default FooterMessageStyles;