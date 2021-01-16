import React from 'react';
import Todos from '../Daily/Todos/container';

import { Container } from './styles';

const Greetings: React.FC = () => {
  return (
    <Container>
      <Todos />
    </Container>
  );
};

export default Greetings;
