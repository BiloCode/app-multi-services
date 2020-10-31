import styled from "styled-components/native";
import { colors } from "../../config";

const WorkerDetailStyle = {
  MainContainer : styled.View`
    flex: 1;
    padding-top: 24px;
    background-color: #F4F4F4;
  `,
  WorkInformation : styled.View`
    padding: 13px;
  `,
  MarginVerticalContainer : styled.View`
    margin-bottom: 25px;
  `,
  MarginBottom : styled.View`
    margin-bottom: 6px;
  `,
  TextDescription : styled.Text`
    font-family: 'RalewayRegular';
    font-size: 13px;
    color: ${colors.paragraph};
  `
};

export default WorkerDetailStyle;