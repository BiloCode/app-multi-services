import styled from "styled-components/native";
import { NSHeaderNavigation } from "../../namespace";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextContent = styled.Text`
  font-family: 'RalewayBold';
  font-size: 15px;
  color: ${NSHeaderNavigation.colors.text};
`;