import React, { FC } from 'react';
import { NSHeaderNavigation } from '../../namespace';
import BaseHeaderComponent from '../BaseHeaderComponent';
import * as TS from './styles';

const Title : FC<NSHeaderNavigation.IPropsTitle> = ({ title }) => (
  <BaseHeaderComponent>
    <TS.Container>
      <TS.TextContent>{title}</TS.TextContent>
    </TS.Container>  
  </BaseHeaderComponent>
)

export default Title;