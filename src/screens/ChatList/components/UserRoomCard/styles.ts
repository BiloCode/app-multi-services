import styled, { css } from "styled-components/native";
import { colors } from "../../../../config";

export const Container = styled.View`
  width: 100%;
  height : 90px;
  flex-direction: row;
  background-color: #fff;
  margin-bottom: 8px;
  border-radius: 20px;
  overflow: hidden;
`;

export const ProfileImageContainer = styled.View`
  width: 80px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const RoomMessageContent = styled.View`
  flex : 1;
  height: 100%;
  padding: 12px 0;
  padding-right: 15px;
  justify-content: center;
`;

export const HeadRoomMessage = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const basicStyles = css`
  font-family: 'RalewayBold';
`;

export const UsernameHeadRoom = styled.Text`
  ${basicStyles};
  font-size: 14px;
`;

export const DateHeadRoom = styled.Text`
  ${basicStyles};
  font-size: 11px;
  color: ${colors.text};
`;

export const LastMessageRoom = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: ${colors.paragraph};
`;

export const ArrowRightContainer = styled.View`
  width: 40px;
  height: 100%;
  background-color: black;
  justify-content: center;
  align-items: center;
`;