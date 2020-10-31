import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width , height } = Dimensions.get('window');

export const Container = styled.View({
  flex : 1,
  paddingTop: 24
});

export const ScrollContainer = styled.ScrollView({
  width,
  height,
});

const headerHeight = 180;

export const HeaderContainer = styled.View({
  width: '100%',
  height: headerHeight
})

const borderRadius = 30;
const minHeight = height - (headerHeight - 24);

export const ProfileInformationContainer = styled.View({
  minHeight,
  borderTopLeftRadius: borderRadius,
  borderTopRightRadius: borderRadius,
  backgroundColor: '#fff'
})