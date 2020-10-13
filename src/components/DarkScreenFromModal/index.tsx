import React, { FC } from 'react';
import * as DSMS from './styles';

const DarkScreenFromModal : FC = ({ children }) => (
  <DSMS.Container>
    {children}
  </DSMS.Container>
);

export default DarkScreenFromModal;