import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers/index';
// import { books } from './categories/Categories';

const initialState = { Book1: { id: Math.random, title: 'The Savior’s Champion', category: 'Fantasy' }, Book2: { id: Math.random, title: 'The Hobbit', category: 'Adventure' }, Book3: { id: Math.random, title: 'Romeo and Juliet', category: 'Classic' } };

const store = createStore(reducers, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
