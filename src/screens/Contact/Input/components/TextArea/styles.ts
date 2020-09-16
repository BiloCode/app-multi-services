import styled from "styled-components/native";
import { InputContainerStyles, TextInputStyles } from "../styles";

const TextAreaStyles = {
  Container : styled.View`
    ${InputContainerStyles};
    height: 80px;
    border-radius: 15px;
  `,
  Input : styled.TextInput`
    ${TextInputStyles};
    padding: 20px 0;
  `
}

export default TextAreaStyles;