import React from 'react';
import { Todo as TodoInterface } from '../../../../interface/todoInterface';

function Todo({ id, text }: TodoInterface): JSX.Element {
  return <div key={id}>{text}</div>;
}

export default Todo;
