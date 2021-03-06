import React from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import Todo from '../components/Todo';
import { getTodos } from '../slices/dataSlice';
import { Todo as TodoInterface } from '../../../../interface/todoInterface';

function Todos(): JSX.Element {
  const todos = useSelector(getTodos);
  const todoList = todos.map(({ id, text }: TodoInterface) => <Todo key={id} id={id} text={text} />);
  return (
    <div>
      {todoList}
      <Todo id={shortid.generate()} editable={true} />
    </div>

  );
}

export default Todos;
