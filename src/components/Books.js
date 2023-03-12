import { useState } from 'react';
import PageContainer from '../../components/Container';
import AddBookForm from './AddBookForm';
import BookList from './BookList';

const defaultBooks = [
  {
    id: 1,
    name: 'The Great Gatsby',
    price: 10.99,
    author: 'F. Scott Fitzgerald',
  },
  {
    id: 2,
    name: 'To Kill a Mockingbird',
    price: 12.99,
    author: 'Harper Lee',
  },
  { id: 3, name: '1984', price: 9.99, author: 'George Orwell' },
];

function Books() {
  const [books, setBooks] = useState(defaultBooks);

  const handleAddBook = (newBook) => {
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

export default Books;
