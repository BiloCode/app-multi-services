import styled from "styled-components/native";
import { InputContainerStyles, TextInputStyles } from "../styles";

const TextStyles = {
  Container : styled.View`
    ${InputContainerStyles};
    height: 32px;
    background-color: rgb(240,240,240);
    border-radius: 6px;
  `,
  Input : styled.TextInput`
    ${TextInputStyles};
  `
}

export default TextStyles;