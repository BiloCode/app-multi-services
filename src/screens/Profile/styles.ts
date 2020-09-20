import styled, { css } from "styled-components/native";

const RegularText = css`
  font-family: 'RalewayRegular';
  text-align: center;
  color: #1858D4;
`;

const ProfileStyles = {
  Container : styled.View`
    flex: 1;
    padding-top: 24px;
  `,
  UserInformation : styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
  `,
  UserFullName : styled.Text`
    font-size: 19px;
    color: #585858;
    font-family : 'RalewayBlack';
    text-align: center;
    margin-bottom: 5px;
  `,
  UserSpecialty : styled.Text`
    font-size: 10px;
    color: #8B8B8B;
    font-family: 'RalewayMedium';
    text-align: center;
  `,
  UserDescription : styled.Text`
    margin-top: 27px; 
    padding: 0 30px;
    font-size: 12px;
    color: #6F6F6F;
    font-family: 'RalewayRegular';
    text-align: center;
  `,
  UserLocation : styled.Text`
    ${RegularText}
    font-size: 11px;
    margin-top: 16px;
  `,
  ButtonContainer : styled.View`
    width: 200px;
    margin: 0 auto;
    margin-top: 40px;
  `,
  UserDate : styled.Text`
    ${RegularText}
    margin-top: 40px;
    font-size: 13px;
  `
}

export default ProfileStyles;