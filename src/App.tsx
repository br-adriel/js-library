import { useState } from 'react';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import ModalAddBook from './components/ModalAddBook';
import ModalContext from './contexts/ModalContext';
import { Livro } from './global/types';
import BooksContext from './contexts/BooksContext';
import BookGrid from './components/BookGrid';

function App() {
  const [modalState, setModalState] = useState<{ show: boolean }>({
    show: false,
  });

  const [booksState, setBooksState] = useState<{ books: Livro[] }>({
    books: [],
  });

  return (
    <>
      <BooksContext.Provider value={{ booksState, setBooksState }}>
        <ModalContext.Provider value={{ modalState, setModalState }}>
          <GlobalStyles />
          <Header />
          <main>
            <BookGrid />
          </main>
          <Footer />
          <ModalAddBook />
        </ModalContext.Provider>
      </BooksContext.Provider>
    </>
  );
}

export default App;
