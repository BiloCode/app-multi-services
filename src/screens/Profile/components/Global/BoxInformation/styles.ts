import styled from "styled-components/native";
import { colors } from "../../../../../config";

export const Container = styled.View({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  paddingTop: 15,
  paddingBottom: 15,
  borderBottomWidth: 1,
  borderBottomColor: 'rgb(230,230,230)'
});

export const ContainerTitle = styled.View({
  flexDirection : 'row',
  alignItems: 'flex-end',
});

export const Title = styled.Text({
  fontSize : 16,
  fontFamily: 'RalewayBold',
  color: colors.main,
  paddingLeft: 8
});

export const Value = styled.Text({
  color: colors.main,
  fontSize : 15,
  fontFamily: 'RalewayRegular'
});