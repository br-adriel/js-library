import { useState } from 'react';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import ModalAddBook from './components/ModalAddBook';
import { AuthGoogleProvider } from './contexts/AuthGoogleContext';
import { BooksContextProvider } from './contexts/BooksContext';
import ModalContext from './contexts/ModalContext';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';

function App() {
  const [modalState, setModalState] = useState<{ show: boolean }>({
    show: false,
  });

  return (
    <>
      <BooksContextProvider>
        <ModalContext.Provider value={{ modalState, setModalState }}>
          <AuthGoogleProvider>
            <GlobalStyles />
            <Header />
            <main>
              <AppRoutes />
            </main>
            <Footer />
            <ModalAddBook />
          </AuthGoogleProvider>
        </ModalContext.Provider>
      </BooksContextProvider>
    </>
  );
}

export default App;
