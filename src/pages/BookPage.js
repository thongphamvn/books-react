import { Box } from '@mui/material';
import { useState } from 'react';
import AddBookForm from '../components/AddBookForm';
import BookList from '../components/BookList';

function BookPage() {
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
    <Box>
      <AddBookForm onAddBook={handleAddBook} />
      <BookList books={books} />

      {/* <Typography>Total prices is: _</Typography> */}
      {/* <Typography>The most expensive book is: _</Typography> */}
    </Box>
  );
}

export default BookPage;
