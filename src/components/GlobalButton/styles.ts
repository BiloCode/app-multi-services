import styled from "styled-components/native";

interface ButtonProps {
  horizontalSize : string;
}

const GlobalButtonStyles = {
  Container : styled.View<ButtonProps>`
    width: ${({ horizontalSize }) => horizontalSize};
    background-color: #1858D4;
    padding: 10px 0;
    border-radius: 20px;
  `,
  Text : styled.Text`
    text-align: center;
    color: #fff;
    font-family : 'RalewayBold';
  `
}

export default GlobalButtonStyles;