import styled from "styled-components/native";
import { colors } from "../../config";

const MainDescriptionStyles = {
  Container : styled.View`
    padding: 20px 0;
  `,
  Text : styled.Text`
    font-family: 'RalewayRegular';
    font-size: 15px;
    color: ${colors.paragraph};
  `,
}

export default MainDescriptionStyles;