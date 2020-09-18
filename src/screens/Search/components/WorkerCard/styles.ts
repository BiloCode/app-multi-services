import styled from "styled-components/native";

const WorkerCardStyles = {
  Container : styled.View`
    width: 200px;
    background-color: #FFF;
    margin-right: 10px;
    border-radius: 20px;
    padding: 25px;
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
  ImageProfile : styled.Image`
    width: 100%;
    height: 110px;
    border-radius: 20px;
  `
}

export default WorkerCardStyles;