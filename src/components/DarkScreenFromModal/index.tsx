import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import * as DSMS from './styles';

const DarkScreenFromModal : FC = ({ children }) => (
  <DSMS.Container>
    <ScrollView>
      <DSMS.ContainerDown>
        {children}
      </DSMS.ContainerDown>
    </ScrollView>
  </DSMS.Container>
);

export default DarkScreenFromModal;