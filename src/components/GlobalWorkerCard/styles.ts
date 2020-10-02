import styled, { css } from "styled-components/native";

interface IPropsContainer {
  rounded? : boolean;
}

export const Container = styled.View<IPropsContainer>`
  width: 100%;
  background-color: #fff;
  padding: 25px;
  margin-bottom: 15px;

  ${({ rounded }) => rounded && css`
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
  `}
`;

export const UserMainInformation = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const UserProfileImage = styled.View`
  width: 70px;
  height: 60px;
`;

export const UserName = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export const UserNameText = styled.Text`
  font-family: 'RalewayBold';
  font-size: 15px;
`;

export const UserPuntuaction = styled.View`
  width: 80px;
  flex-direction: row;
  padding-top: 5px;
  justify-content: center;
`;

export const UserWorkInformation = styled.View`
  padding: 5px 0; 
`;

export const UserPriceAndWork = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserWork = styled.Text`
  font-size: 12px;
  font-family: 'RalewayBold';
  transform: translateY(3px);
`;

export const UserPrice = styled.Text`
  color: blue;
  font-size: 20px;
  font-family: 'RalewayBlack';
`;

export const UserDescription = styled.Text`
  font-size: 12px;
  padding-top: 10px;
`;

export const CardActions = styled.View`
  width: 100%;
  flex-direction: row;
  padding-top: 10px;
  justify-content: space-between;
`;