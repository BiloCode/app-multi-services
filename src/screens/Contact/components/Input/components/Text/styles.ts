import styled from "styled-components/native";
import { InputContainerStyles, TextInputStyles } from "../styles";

const TextStyles = {
  Container : styled.View`
    ${InputContainerStyles};
    height: 32px;
    background-color: #ECECEC;
    border-radius: 16px;
  `,
  Input : styled.TextInput`
    ${TextInputStyles};
  `
}

export default TextStyles;