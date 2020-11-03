import styled from "styled-components/native";
import { InputContainerStyles, TextInputStyles } from "../styles";

const TextAreaStyles = {
  Container : styled.View`
    ${InputContainerStyles};
    height: 80px;
    border-radius: 6px;
  `,
  Input : styled.TextInput`
    ${TextInputStyles};
    padding: 15px 0;
  `
}

export default TextAreaStyles;