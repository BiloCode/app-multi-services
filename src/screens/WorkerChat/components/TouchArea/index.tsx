import React, { memo } from 'react';
import Input from './Input';
import SendButton from './SendButton';
import * as TAS from './styles';

const TouchArea = () => (
  <TAS.Container>
    <Input />
    <SendButton />
  </TAS.Container>
);

export default memo(TouchArea);