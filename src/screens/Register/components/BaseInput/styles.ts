import styled from "styled-components/native";

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
    color: #585858;
    font-family: 'RalewayBold';
    font-size: 13px;
    margin-bottom: 4px;
  `,
  DescriptionText : styled.Text`
    width: 80%;
    color: #8B8B8B;
    font-size: 10px;
    font-family: 'RalewayRegular';
  `
}

export default BaseInputStyles;