import styled from "styled-components/native";

const LoginStyles = {
  Container : styled.View`
    flex: 1;
    padding-top: 24px;
    position: relative;
    background-color: #fff;
    align-items: center;
  `,
  Circle : styled.View`
    width: 380px;
    height: 380px;
    background-color: #1858D4;
    border-radius: 190px;
    position: absolute;
    left: -112px;
    top: -170px;
  `,
  FormContainer : styled.View`
    width: 80%;
    transform: translateY(240px);
  `,
  HeaderContainer : styled.View`
    width: 100%;
    padding: 0 10px;
  `,
  HeaderTitle : styled.Text`
    font-size: 23px;
    font-family : 'RalewayExtraBold';
    color: #585858;
  `,
  HeaderSubTitle : styled.Text`
    font-size: 12px;
    font-family : 'RalewaySemiBold';
    color: #585858;
  `
}

export default LoginStyles;