import styled from "styled-components/native";
import { colors } from "../../../../config";

const SelectStyles = {
  Container : styled.View`
    width: 100%;
    height: 38px;
    flex-direction: row;
    border-radius: 19px;
    background-color: ${colors.bgMainOpacited};
    margin: 3px 0;
  `,
  ContainerIcon : styled.View`
    width: 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
  `,
  Select : styled.Picker`
    height: 100%;
    flex: 1;
  `
}

export default SelectStyles;