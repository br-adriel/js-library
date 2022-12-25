import React, { createContext, useState } from 'react';
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

export const BooksContext = createContext<BooksContextType>(defaultContext);

export const BooksContextProvider: React.FC<{ children: any }> = ({
  children,
}) => {
  const [booksState, setBooksState] = useState<BooksStateType>({
    books: [],
    shownBooks: [],
    guia: 'todos',
  });

  return (
    <BooksContext.Provider value={{ booksState, setBooksState }}>
      {children}
    </BooksContext.Provider>
  );
};
