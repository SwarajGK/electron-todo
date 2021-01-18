import React from 'react';
import { useSelector } from 'react-redux';
import Todo from '../components/Todo';
import { getTodos } from '../slices/dataSlice';
import { Todo as TodoInterface } from '../../../../interface/todoInterface';

function Todos(): JSX.Element {
  // const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const todoList = todos.map(({ id, text }: TodoInterface) => (
    <Todo key={id} id={id} text={text} />
  ));
  return <>{todoList}</>;
}

export default Todos;
