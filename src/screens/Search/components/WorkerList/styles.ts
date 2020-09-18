import styled from "styled-components/native";

const WorkerListStyles = {
  Container : styled.View`
    width: 100%;
    height: 280px;
    justify-content: space-between;
    margin-bottom: 25px;
  `,
  Title : styled.Text`
    font-family: 'RalewayExtraBold';
    color: #585858;
    font-size: 15px;
  `,
  CardsContainer : styled.View`
    width: 100%;
    height: 250px;
  `
}

export default WorkerListStyles;