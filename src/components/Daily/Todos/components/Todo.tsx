import React from 'react';
import { Input } from 'antd';
import { Todo as TodoInterface } from '../../../../interface/todoInterface';

function Todo({ id, text, editable }: TodoInterface): JSX.Element {
  if (editable) {
    return <Input placeholder="Enter your todo here..." value={text} />;
  }
  return <div key={id}>{text}</div>;
}

export default Todo;
