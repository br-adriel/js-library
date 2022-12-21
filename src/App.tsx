import { useState } from 'react';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import ModalAddBook from './components/ModalAddBook';
import ModalContext from './contexts/ModalContext';

function App() {
  const [modalState, setModalState] = useState<{ show: boolean }>({
    show: false,
  });
  return (
    <>
      <ModalContext.Provider value={{ modalState, setModalState }}>
        <GlobalStyles />
        <Header />
        <main></main>
        <Footer />
        <ModalAddBook />
      </ModalContext.Provider>
    </>
  );
}

export default App;
