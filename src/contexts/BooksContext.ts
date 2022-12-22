import React, { createContext } from 'react';
import { Livro } from '../global/types';

type BooksStateType = {
  books: Livro[];
};

type BooksContextType = {
  booksState: BooksStateType;
  setBooksState: React.Dispatch<React.SetStateAction<BooksStateType>>;
};

const defaultContext: BooksContextType = {
  booksState: { books: [] },
  setBooksState: () => {},
};

const BooksContext = createContext<BooksContextType>(defaultContext);

export default BooksContext;
