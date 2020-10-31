import styled, { css } from "styled-components/native";
import { colors } from "../../../../config";

const TextBaseStyles = css`
  font-family : 'RalewayBlack';
`

const LocationBoxStyles = {
  Container : styled.View`
    margin-bottom: 15px;
  `,
  LocationTextContainer : styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  LocationTextBase : styled.Text`
    ${TextBaseStyles};
    font-size: 14px;
    color: black;
  `,
  LocationText : styled.Text`
    ${TextBaseStyles};
    font-size: 13px;
    color: ${colors.main};
  `,
  MapContainer : styled.View`
    width: 100%;
    height: 180px;
    background-color: rgb(250,250,250);
  `
}

export default LocationBoxStyles;