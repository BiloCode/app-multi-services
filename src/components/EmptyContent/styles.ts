import styled from "styled-components/native";
import { colors } from "../../config";

export const ContentEmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MessageIndicator = styled.Text`
  width: 80%;
  max-width: 180px;
  text-align: center;
  color: black;
  font-size: 13px;
  font-family : 'RalewayBold';
  color: ${colors.main};
  margin-top: 20px;
`;