import { Dimensions } from 'react-native';
import styled from "styled-components/native";

const { width , height } = Dimensions.get("screen");

const ModalSearchStyles = {
  Container : styled.View`
    width: ${width}px;
    height: ${height}px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
  `,
  TitleContainer : styled.View`
    height: ${height * 0.32}px;
    align-items: center;
    justify-content: center;
  `,
  TitleText : styled.Text`
    width: 100%;
    font-size: 25px;
    color: #585858;
    font-family: 'RalewayBold';
    text-align: center;
  `,
  ListContent : styled.View`
    height: ${height * 0.45}px;
  `,
  ButtonContainer : styled.View`
    height: ${height * 0.23}px;
    padding: 0 30px;
    align-items: center;
    justify-content: center;
  `,
  IconClose : styled.View`
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 24px;
    padding: 20px;
  `
}

export default ModalSearchStyles;