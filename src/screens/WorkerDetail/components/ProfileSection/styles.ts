import styled from "styled-components/native";
import { colors } from "../../../../config";

const ProfileSectionStyles = {
  MainContainer : styled.View`
    width: 100%;
    height: 225px;
    position: relative;
  `,
  FloatingContent : styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  `,
  ImageProfileContainer : styled.View`
    width: 116px;
    height: 116px;
    border-radius: 58px;
    margin-bottom: 10px;
    border: 2px solid #fff;
    justify-content: center;
    align-items: center;
  `,
  WorkerName : styled.Text`
    font-family: 'RalewayExtraBold';
    font-size: 18px;
    color: black;
    text-align: center;
  `,
  WorkerState : styled.Text`
    font-family: 'RalewayMedium';
    font-size: 11px;
    color: ${colors.paragraph};
    text-align: center;
    padding-top: 3px;
  `,
  FloatingIcon : styled.View` 
    width: 46px;
    height: 46px;
    border-radius: 23px;
    position: absolute;
    background-color: ${colors.main};
    align-items : center;
    justify-content : center;
    top: 15px;
    left: 15px;
  `
}

export default ProfileSectionStyles;