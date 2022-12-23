import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import ModalAddBook from './components/ModalAddBook';
import BooksContext, { BooksStateType } from './contexts/BooksContext';
import ModalContext from './contexts/ModalContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [modalState, setModalState] = useState<{ show: boolean }>({
    show: false,
  });

  const [booksState, setBooksState] = useState<BooksStateType>({
    books: [],
    shownBooks: [],
    guia: 'todos',
  });

  return (
    <>
      <BooksContext.Provider value={{ booksState, setBooksState }}>
        <ModalContext.Provider value={{ modalState, setModalState }}>
          <GlobalStyles />
          <AppRoutes />
          <Footer />
          <ModalAddBook />
        </ModalContext.Provider>
      </BooksContext.Provider>
    </>
  );
}

export default App;
