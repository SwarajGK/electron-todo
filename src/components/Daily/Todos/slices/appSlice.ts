import { createSlice } from '@reduxjs/toolkit';
// import { RootState } from '../../../../store';

export interface State {
  counter: number;
}

const { reducer, actions } = createSlice({
  name: 'counter',
  initialState: {
    counter: 0
  } as State,

  reducers: {
    increment: (state: State, { payload = 1 }: { payload?: number }) => {
      state.counter += payload;
    },
    decrement: (state: State, { payload = 1 }: { payload?: number }) => {
      state.counter -= payload;
    }
  }
});

export default reducer;
export const { increment, decrement } = actions;

// export const getCounterValue = (state: RootState): number => state.app.counter;
