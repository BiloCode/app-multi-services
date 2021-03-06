import styled from "styled-components/native";

const SelectStyles = {
  Container : styled.View`
    width: 100%;
    background-color: rgb(240,240,240);
    height: 32px;
    border-radius: 6px;
    padding: 0 10px;
  `,
  Picker : styled.Picker`
    width: 100%;
    height: 100%;
    font-family: 'RalewayMedium';
    color: #8B8B8B;
  `
}

export default SelectStyles;