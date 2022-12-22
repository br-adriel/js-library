import React, { createContext } from 'react';
import { Livro } from '../global/types';

export type BooksStateType = {
  books: Livro[];
  shownBooks: Livro[];
  guia: string;
};

type BooksContextType = {
  booksState: BooksStateType;
  setBooksState: React.Dispatch<React.SetStateAction<BooksStateType>>;
};

const defaultContext: BooksContextType = {
  booksState: { books: [], shownBooks: [], guia: 'todos' },
  setBooksState: () => {},
};

const BooksContext = createContext<BooksContextType>(defaultContext);

export default BooksContext;
