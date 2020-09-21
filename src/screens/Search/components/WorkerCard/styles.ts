import styled, { css } from "styled-components/native";

const ImageStyles = css`
  width: 100%;
  height: 110px;
  border-radius: 20px;
`

const WorkerCardStyles = {
  Container : styled.View`
    width: 200px;
    background-color: #FFF;
    margin-right: 10px;
    border-radius: 20px;
    padding: 25px 0;
    align-items: center;
  `,
  InformationContainer : styled.View`
    margin: 15px 0;
  `,
  WorkerName : styled.Text`
    font-family: 'RalewayExtraBold';
    font-size: 13px;
    color: #585858;
    text-align: center;
    padding: 0 15px;
  `,
  Specialty : styled.Text`
    font-family: 'RalewaySemiBold';
    font-size: 9px;
    color: #8B8B8B;
    text-align: center;
    margin: 3px 0;
  `,
  StarContainer : styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  ImageProfileContainer : styled.View`
    ${ImageStyles}
    padding: 0 25px;
  `,
  ImageProfile : styled.Image`
    ${ImageStyles}
  `
}

export default WorkerCardStyles;