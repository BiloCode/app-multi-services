import styled from "styled-components/native";
import { colors } from "../../../../config";

interface IButtonProps {
  light? : boolean;
}

export const Container = styled.View<IButtonProps>((props) => ({
  width : '100%',
  backgroundColor: !props.light ? colors.main : 'rgb(240,240,240)',
  padding: 10,
  borderRadius : 25,
}));

export const TextButton = styled.Text<IButtonProps>((props) => ({
  textAlign : 'center',
  fontFamily : 'RalewayBold',
  color: !props.light ? '#fff' : colors.main
}));