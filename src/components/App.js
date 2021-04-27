import Container from 'react-bootstrap/Container';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import NavBar from './Navbar';

function App() {
  return (
    <div className="bg-light mh-100">
      <NavBar />
      <Container>
        <BooksList />
        <BooksForm />
      </Container>
    </div>
  );
}

export default App;
