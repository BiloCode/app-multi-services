import React, { FC } from 'react'
import BaseBoxContainer from './styles'

interface IProps {
  isMarginBottom? : boolean;
}

const BaseBox : FC<IProps> = ({ children , isMarginBottom }) => (
  <BaseBoxContainer isMarginBottom={isMarginBottom} >
    {children}
  </BaseBoxContainer>
)

export default BaseBox;