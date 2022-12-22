import { useContext } from 'react';
import styled from 'styled-components';
import BooksContext from '../contexts/BooksContext';
import BookCard from './BookCard';

const BookGrid = () => {
  const { booksState } = useContext(BooksContext);
  return (
    <Grid>
      {booksState.books.length ? (
        booksState.books.map((book) => {
          return <BookCard key={book.id} livro={book} />;
        })
      ) : (
        <h2>Nenhum livro cadastrado</h2>
      )}
    </Grid>
  );
};

const Grid = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default BookGrid;
