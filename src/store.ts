import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import appDailyTodosReducer from './components/Daily/Todos/slices/appSlice';
import dataDailyTodosReducer from './components/Daily/Todos/slices/dataSlice';

const makeStore = (reducer: any) =>
  configureStore({
    reducer
  });

const app = combineReducers({
  dailyTodos: appDailyTodosReducer
});

const data = combineReducers({
  dailyTodos: dataDailyTodosReducer
});

const appReducres = combineReducers({
  app,
  data
});

const store = makeStore(appReducres);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
