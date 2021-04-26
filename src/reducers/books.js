import { CREATE_BOOK, REMOVE_BOOK } from '../Actions';

const books = (state = [], action) => {
  const { type, book } = action;
  switch (type) {
    case CREATE_BOOK:
      return [...state, book];
    case REMOVE_BOOK:
      return state.filter((Book) => Book.id !== book.id);
    default:
      return state;
  }
};

export default books;
