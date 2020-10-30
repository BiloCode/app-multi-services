import styled from "styled-components/native";
import { colors } from "../../config";

const InputStyles = {
  Container : styled.View`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    background-color: ${colors.bgMainOpacited};
    flex-direction: row;
    margin: 3px 0;
  `,
  IconContainer : styled.View`
    width: 55px;
    height: 100%;
    justify-content: center;
    align-items: center;
  `,
  InputContainer : styled.View`
    flex: 1;
  `,
  InputText : styled.TextInput`
    height: 100%;
    color: #585858;
    font-size: 12px;
    font-family: 'RalewaySemiBold';
    padding-right: 10px;
  `
}

export default InputStyles;