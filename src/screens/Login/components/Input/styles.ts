import styled from "styled-components/native";

const InputStyles = {
  Container : styled.View`
    width: 100%;
    height: 38px;
    border-radius: 19px;
    background-color: #F4F4F4;
    flex-direction: row;
    margin: 3px 0;
  `,
  IconContainer : styled.View`
    width: 50px;
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
    font-size: 11px;
    font-family: 'RalewaySemiBold';
  `
}

export default InputStyles;