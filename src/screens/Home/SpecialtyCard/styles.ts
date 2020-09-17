import styled from "styled-components/native";

const SpecialtyCardStyles = {
  Container : styled.View`
    width: 45%;
    min-width: 117px;
    height: 130px;
    background-color: #F4F4F4;
    border-radius: 20px;
    margin: 3px;
  `,
  ImageContainer : styled.View`
    width: 100%;
    height: 95px;
    justify-content: center;
    align-items: center;
  `,
  Image : styled.Image`
    width: 60px;
    height: 50px;
  `,
  TitleContainer : styled.View`
    width: 100%;
    height: 35px;
    justify-content: center;
  `,
  Title : styled.Text`
    text-align: center;
    font-family: 'RalewayBlack';
    color: #8B8B8B;
  `
}

export default SpecialtyCardStyles;