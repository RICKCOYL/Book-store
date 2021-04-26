import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers/index';
// import { books } from './categories/Categories';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 11).toString(),
      title: 'The Savior’s Champion',
      category: 'Fantasy',
    },
    {
      id: (Math.floor(Math.random() * 11)).toString(),
      title: 'The Hobbit',
      category: 'Adventure',
    },
    {
      id: (Math.floor(Math.random() * 11)).toString(),
      title: 'Romeo and Juliet',
      category: 'Classic',
    },
  ],
};

const store = createStore(reducers, initialState);
// eslint-disable-next-line no-console
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
