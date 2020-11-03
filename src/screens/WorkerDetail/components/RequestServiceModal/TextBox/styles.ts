import styled from "styled-components/native";

export const Container = styled.View({
  marginTop: 20
});

export const ContainerTitle = styled.View({
  flexDirection : 'row',
  alignItems : 'center',
  marginBottom: 8
});

export const Title = styled.Text({
  marginLeft: 8,
  fontFamily : 'RalewayBold'
});

export const ContainerInput = styled.View({
  flexDirection : 'row',
  alignItems : 'center'
});

export const InputMesssage = styled.Text({
  paddingHorizontal : 10,
  fontFamily : 'RalewayBold'
});

export const Input = styled.TextInput({
  flex : 1,
  backgroundColor: 'rgb(245,245,245)',
  borderRadius: 10,
  paddingVertical: 5,
  paddingHorizontal: 20,
  fontSize : 14,
  fontFamily : 'RalewayRegular'
});