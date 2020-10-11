import styled, { css } from "styled-components/native";

const backgroundColor = 'rgb(0,115,255)';

export const Container = styled.View`
  flex: 1;
  padding-top: 24px;
  background-color: blue;
`;

export const MainContainer = styled.View`
  width: 85%;
  margin: 0 auto;
`;

export const WorkMainData = styled.View`
  padding: 20px 35px;
  background-color: ${backgroundColor};
  border-radius: 25px;
`;

export const WorkTitle = styled.Text`
  font-size: 20px;
  font-family: 'RalewayBlack';
  color: #fff;
`;

export const WorkDateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BaseContainerStyles = css`
  margin-top: 10px;
  padding: 15px 25px;
`;

export const PriceContainer = styled.Text`
  ${BaseContainerStyles};
  background-color: ${backgroundColor};
  border-radius: 25px;
`;

export const Price = styled.Text`
  color: #fff;
  font-family: 'RalewayBold';
  font-size: 16px;
`;

export const WorkDescriptionContainer = styled.View`
  width: 100%;
  background-color: ${backgroundColor};
  border-radius: 25px;
  ${BaseContainerStyles};
  margin-bottom: 45px;
`;

export const WorkDescriptionTitle = styled.Text`
  font-size: 15px;
  color: #fff;
  font-family: 'RalewayBold';
`;

export const WorkDescriptionText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-family: 'RalewayRegular';
  margin-top: 5px;
`;