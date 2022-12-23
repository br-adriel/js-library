import { useState } from 'react';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import ModalAddBook from './components/ModalAddBook';
import { AuthGoogleProvider } from './contexts/AuthGoogleContext';
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
          <AuthGoogleProvider>
            <GlobalStyles />
            <AppRoutes />
            <Footer />
            <ModalAddBook />
          </AuthGoogleProvider>
        </ModalContext.Provider>
      </BooksContext.Provider>
    </>
  );
}

export default App;
