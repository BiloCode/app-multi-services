import styled from "styled-components/native";

const WorkerListStyles = {
  Container : styled.View`
    width: 100%;
    height: 280px;
    justify-content: space-between;
    margin-bottom: 25px;
    position: relative;
  `,
  Title : styled.Text`
    font-family: 'RalewayExtraBold';
    color: #585858;
    font-size: 15px;
  `,
  CardsContainer : styled.View`
    width: 100%;
    position: relative;
    align-items: flex-start;
  `,
  LoadingContainer : styled.View`
    width: 100%;
    height: 280px;
    position: relative;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
  `
}

export default WorkerListStyles;