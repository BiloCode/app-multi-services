import styled from "styled-components/native";
import { colors } from "../../../../../config";

export const Container = styled.View({
  paddingTop: 15,
  paddingBottom: 15,
  borderBottomWidth : 1,
  borderBottomColor : 'rgb(230,230,230)'
});

export const DescriptionContainer = styled.View({
  flexDirection: 'row',
  alignItems: 'flex-end',
  paddingBottom: 15
});

export const Label = styled.Text({
  fontFamily : 'RalewayBold',
  fontSize : 15,
  paddingLeft: 8,
  color: colors.main
})

export const Input = styled.TextInput(props => ({
  minHeight: 80,
  fontSize : 13,
  backgroundColor: 'rgb(250,250,250)',
  padding: '10px 20px',
  fontFamily: 'RalewayRegular',
  borderRadius : 5,
  color: colors.paragraph
}))

export const TextContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
  margin-left: 5px;
`;

export const Message = styled.Text`
  color: ${colors.mainSmoothed};
  font-size: 11px;
`;

export const EditIconContainer = styled.View`
  margin-right: 8px;
`;