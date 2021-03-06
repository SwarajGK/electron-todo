import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../../store';
import { Todo } from '../../../../interface/todoInterface';

export interface State {
  todos: Array<Todo>;
}

const { reducer, actions } = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  } as State,

  reducers: {
    addTodo: (state: State, { payload }: { payload: Todo }) => {
      if (payload.id) {
        state.todos.push(payload);
      }
    },
    removeTodo: (state: State, { payload }: { payload: string }) => {
      if (payload) {
        state.todos = state.todos.filter((todo) => todo.id === payload);
      }
    },
    updateTodo: (
      state: State,
      { payload }: { payload: { id: string; todoItem: { id: string; date: string; title?: string; text?: string } } }
    ) => {
      if (payload) {
        state.todos = state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return {
              ...todo,
              ...payload
            };
          }
          return todo;
        });
      }
    }
  }
});

export default reducer;
export const { addTodo, removeTodo, updateTodo } = actions;

export const getTodos = (state: RootState): Array<Todo> => state.data.dailyTodos.todos;
