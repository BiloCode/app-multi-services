import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 25px;
  background-color: #fff;
`;

const MapStyles = css`
  width: 100%;
  height: 200px;
`;

export const Map = styled.View`
  ${MapStyles};
`;

export const MapContainer = styled.View`
  ${MapStyles};
  background-color: rgb(235,235,235);
  border-radius: 25px;
  overflow: hidden;
`;