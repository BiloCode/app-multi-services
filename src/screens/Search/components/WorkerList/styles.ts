import styled from "styled-components/native";

const margin = '25px';

const WorkerListStyles = {
  Container : styled.View`
    width: 100%;
    justify-content: space-between;
    position: relative;
    margin-bottom: ${margin};
  `,
  Title : styled.Text`
    font-family: 'RalewayExtraBold';
    color: #585858;
    font-size: 16px;
    padding-bottom: ${margin};
    padding-right: ${margin};
    line-height: 20px;
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