import { configureStore } from '@reduxjs/toolkit';

import appDailyTodosReducer from './components/Daily/Todos/slices/appSlice';

const store = configureStore({
  reducer: {
    app: appDailyTodosReducer
  }
});

export default store;
