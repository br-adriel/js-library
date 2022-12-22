import { useContext } from 'react';
import styled from 'styled-components';
import BooksContext from '../contexts/BooksContext';
import BookCard from './BookCard';

const BookGrid = () => {
  const { booksState } = useContext(BooksContext);
  return (
    <>
      {booksState.shownBooks.length ? (
        <Grid>
          {booksState.shownBooks.map((book) => {
            return <BookCard key={book.id} livro={book} />;
          })}
        </Grid>
      ) : (
        <NoBookFound>
          <h2>Nenhum livro encontrado</h2>
        </NoBookFound>
      )}
    </>
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

const NoBookFound = styled.div`
  padding: 20px;
  width: 100%;
  text-align: center;
`;

export default BookGrid;
