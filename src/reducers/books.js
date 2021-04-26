import { CREATE_BOOK, REMOVE_BOOK } from '../Actions';

const initialState = [
  {
    id: Math.floor(Math.random() * 1111).toString(),
    title: 'The Savior’s Champion',
    category: 'Fantasy',
  },
  {
    id: (Math.floor(Math.random() * 1111)).toString(),
    title: 'The Hobbit',
    category: 'Adventure',
  },
  {
    id: (Math.floor(Math.random() * 1111)).toString(),
    title: 'Romeo and Juliet',
    category: 'Classic',
  },
];

const books = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((Book) => Book.id !== payload);
    default:
      return state;
  }
};

export default books;
