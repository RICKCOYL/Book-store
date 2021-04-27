import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from '../Actions';

const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const filter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export { createBook, removeBook, filter };
