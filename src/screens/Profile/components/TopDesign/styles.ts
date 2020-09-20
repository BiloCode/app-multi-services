import styled, { css } from "styled-components/native";

const Image = css`
  width: 150px;
  height: 150px;
  border-radius: 215px;
`;

const TopDesignStyles = {
  TopDesignContainer : styled.View`
    width: 100%;
    height: 290px;
    position: relative;
  `,
  TopCircleLeft : styled.View`
    width: 380px;
    height: 380px;
    border-radius: 190px;
    background-color: #1D61E4;
    position: absolute;
    top: -168px;
    left: -131px;
  `,
  TopCircleRight : styled.View`
    width: 430px;
    height: 430px;
    background-color: #1858D4;
    border-radius: 215px;
    position: absolute;
    top: -147px;
    left: 122px;
  `,
  FloatingContent : styled.View`
    width: 100%;
    height: 290px;
    padding: 25px;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: space-between;
  `,
  ScreenInformation : styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  ScreenTitle : styled.Text`
    font-size: 18px;
    color: #fff;
    font-family: 'RalewayExtraBold';
  `,
  ProfileImageContainer : styled.View`
    ${Image};
  `,
  ProfileImage : styled.Image`
    ${Image};
 `
}

export default TopDesignStyles;