import styled from "styled-components/native";

const ProfileSectionStyles = {
  MainContainer : styled.View`
    width: 100%;
    height: 225px;
    position: relative;
    background-color: rgba(0,0,0,.7);
  `,
  Image : styled.Image`
    width: 100%;
    height: 100%;
  `,
  FloatingContent : styled.View`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
  `,
  ImageProfile : styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 2px solid #F4F4F4;
    margin: 10px 0;
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