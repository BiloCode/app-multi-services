import styled from "styled-components/native";

const ProfileSectionStyles = {
  MainContainer : styled.View`
    width: 100%;
    height: 225px;
    position: relative;
    background-color: #D4D4D4;
  `,
  Image : styled.Image`
    width: 100%;
    height: 100%;
  `,
  FloatingContent : styled.View`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.4);
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
  `,
  ImageProfileContainer : styled.View`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin: 10px 0;
    border: 2px solid #fff;
    justify-content: center;
    align-items: center;
  `,
  WorkerName : styled.Text`
    font-family: 'RalewayExtraBold';
    font-size: 17px;
    color: #fff;
    text-align: center;
  `,
  WorkerState : styled.Text`
    font-family: 'RalewayMedium';
    font-size: 10px;
    color: #fff;
    text-align: center;
  `,
  FloatingIcon : styled.View`
    position: absolute;
    padding: 15px;
  `
}

export default ProfileSectionStyles;