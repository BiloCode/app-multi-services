import styled from "styled-components/native";

const height = 250;

export const Container = styled.View`
  padding: 0 40px;
  padding-top: 10px;
  padding-bottom: 30px;
`;

export const MapContainer = styled.View`
  width: 100%;
  height: ${height}px;
  border-radius: 25px;
  overflow: hidden;
`;

export const MapStyle = styled.View`
  width: 100%;
  height: ${height}px;
`;