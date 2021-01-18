import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import store from './store';
import { GlobalStyle } from './styles/GlobalStyle';

import TododApp from './components/TodoApp';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <TododApp />
    </Provider>
  );
};

render(<App />, mainElement);
