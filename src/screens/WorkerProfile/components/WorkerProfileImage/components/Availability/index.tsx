import React, { FC } from 'react';
import { WorkerState } from '../../../../../../metadata/types';
import * as AS from './styles';

interface IProps {
  value : WorkerState
}

const Availability : FC<IProps> = ({ value }) => (
  <AS.Container>
    <AS.TextAvailability>({value === 'available' ? 'Disponible' : 'Ocupado'})</AS.TextAvailability>
  </AS.Container>
);

export default Availability;