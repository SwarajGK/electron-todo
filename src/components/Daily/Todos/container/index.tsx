import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue, increment, decrement } from '../slices/appSlice';

function Todos (): JSX.Element {
  const dispatch = useDispatch();
  const counter = useSelector(getCounterValue);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {counter}
    </div>
  );
}

export default Todos;
