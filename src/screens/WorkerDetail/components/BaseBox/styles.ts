import styled from "styled-components/native";

interface IProps {
  isMarginBottom? : boolean;
}

const BaseBoxContainer = styled.View<IProps>`
  width: 100%;
  background-color: #fff;
  padding: 18px 20px;
  margin-bottom: ${({ isMarginBottom }) => isMarginBottom ? '8px' : '0px'};
`;

BaseBoxContainer.defaultProps = {
  isMarginBottom : true
}

export default BaseBoxContainer;