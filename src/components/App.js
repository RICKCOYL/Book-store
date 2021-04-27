import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <BooksForm />
      <BooksList />
    </div>
  );
}

export default App;
