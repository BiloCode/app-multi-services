import styled from "styled-components/native";

const FooterMessageStyles = {
  Container : styled.View`
    width: 100%;
    margin-top: 25px;
    flex-direction: row;
    justify-content: center;
  `,
  NotLink : styled.Text`
    font-size: 10px;
    color: #6F6F6F;
    font-family: 'RalewayMedium';
  `,
  Link : styled.Text`
    margin-left: 5px;
    color: #1858D4;
    font-size: 10px;
    font-family : 'RalewayBold';
  `
}

export default FooterMessageStyles;