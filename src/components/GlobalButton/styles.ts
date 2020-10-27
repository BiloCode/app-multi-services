import styled from "styled-components/native";
import { colors } from "../../config";

interface ButtonProps {
  horizontalSize : string;
  backgroundColor? : string;
}

interface ButtonTextProps {
  textColor? : string;
}

const GlobalButtonStyles = {
  Container : styled.View<ButtonProps>`
    width: ${({ horizontalSize }) => horizontalSize};
    background-color: ${({ backgroundColor }) => backgroundColor || colors.main };
    padding: 10px 0;
    border-radius: 20px;
  `,
  Text : styled.Text<ButtonTextProps>`
    text-align: center;
    color: ${({ textColor }) => textColor || '#fff'};
    font-size: 13px;
    font-family : 'RalewayBold';
  `
}

export default GlobalButtonStyles;