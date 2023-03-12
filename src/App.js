import { useState } from 'react';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import PageContainer from './components/Container';

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      name: 'The Great Gatsby',
      price: 10.99,
      author: 'F. Scott Fitzgerald',
    },
  ]);

  const handleAddBook = async (newBook) => {
    books.push(newBook);
    setBooks(books);
  };

  return (
    <PageContainer name={'My Books'}>
      <AddBookForm onAddBook={handleAddBook} />
      <BookList books={books} />

      {/* <Typography>Total prices is: _</Typography> */}
      {/* <Typography>The most expensive book is: _</Typography> */}
    </PageContainer>
  );
}

export default App;
