import { Button, Grid, TextField, Typography } from '@mui/material';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';

function AddBookForm({ onAddBook }) {
  const [newBook, setNewBook] = useState({
    name: '',
    price: '',
    author: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddBook({ ...newBook, id: nanoid() });
  };

  return (
    <div>
      <Typography>Add a Book</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Name'
              name='name'
              value={newBook.name}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Author'
              name='author'
              value={newBook.author}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Price'
              name='price'
              value={newBook.price}
              onChange={handleInputChange}
              type='number'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' color='primary'>
              Add Book
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default AddBookForm;
