import styled from "styled-components/native";
import { colors } from "../../../../config";

const BaseInputStyles = {
  Container : styled.View`
    margin-bottom: 28px;
  `,
  ContainerElements : styled.View`
    width: 80%;
    margin: 0 auto;
  `,
  TextContainer : styled.View`
    margin-bottom: 18px;
  `,
  TitleText : styled.Text`
    color: black;
    font-family: 'RalewayBold';
    font-size: 14px;
    margin-bottom: 4px;
  `,
  DescriptionText : styled.Text`
    width: 80%;
    color: ${colors.paragraph};
    font-size: 11px;
    font-family: 'RalewayRegular';
  `
}

export default BaseInputStyles;