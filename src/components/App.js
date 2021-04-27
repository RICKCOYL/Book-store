import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import CategoryFilter from './CategoryFilter';

function App() {
  return (
    <div>
      <CategoryFilter />
      <BooksForm />
      <BooksList />
    </div>
  );
}

export default App;
