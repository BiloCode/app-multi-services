import styled, { css } from "styled-components/native";

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
    font-size: 13px;
    color: #585858;
  `,
  LocationText : styled.Text`
    ${TextBaseStyles};
    font-size: 11.5px;
    color: #1858D4;
  `,
  MapContainer : styled.View`
    width: 100%;
    height: 180px;
    background-color: rgb(250,250,250);
  `
}

export default LocationBoxStyles;