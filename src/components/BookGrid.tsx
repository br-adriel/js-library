import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { BooksContext } from '../contexts/BooksContext';
import BookCard from './BookCard';
import { AuthGoogleContext } from '../contexts/AuthGoogleContext';
import { db } from '../services/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { Livro } from '../global/types';

const BookGrid = () => {
  const { booksState, setBooksState } = useContext(BooksContext);
  const { user } = useContext(AuthGoogleContext);
  useEffect(() => {
    const inicializarBiblioteca = async () => {
      if (user) {
        const docRef = doc(db, 'biblioteca', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBooksState({
            books: docSnap.data().livros,
            shownBooks: docSnap.data().livros,
            guia: 'todos',
          });
        } else {
          setBooksState({
            books: [],
            shownBooks: [],
            guia: 'todos',
          });
        }
      } else {
        setBooksState({
          books: [],
          shownBooks: [],
          guia: 'todos',
        });
      }
    };

    inicializarBiblioteca();
  }, []);
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
