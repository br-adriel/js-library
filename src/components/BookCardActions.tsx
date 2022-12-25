import { useContext } from 'react';
import { FaCheck, FaHeart, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import { BooksContext } from '../contexts/BooksContext';
import { Livro } from '../global/types';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase.config';
import { AuthGoogleContext } from '../contexts/AuthGoogleContext';

interface IProps {
  book: Livro;
}

const BookCardActions: React.FC<IProps> = ({ book }) => {
  const { setBooksState } = useContext(BooksContext);
  const { user } = useContext(AuthGoogleContext);

  const apagar = () => {
    setBooksState((prev) => {
      return {
        ...prev,
        books: prev.books.filter((b) => b.id !== book.id),
        shownBooks: prev.shownBooks.filter((b) => b.id !== book.id),
      };
    });
  };

  const favoritar = async () => {
    const toggleFavorito = (b: Livro) => {
      if (b.id === book.id)
        return {
          ...b,
          favorito: !b.favorito,
        };
      return b;
    };
    if (user && book.id) {
      const docRef = doc(db, 'biblioteca', user.uid, 'livros', book.id);
      await updateDoc(docRef, { favorito: !book.favorito });
      setBooksState((prev) => {
        return {
          ...prev,
          books: prev.books.map(toggleFavorito),
          shownBooks: prev.shownBooks.map(toggleFavorito),
        };
      });
    }
  };

  const marcarLido = () => {
    const toggleLido = (b: Livro) => {
      if (b.id === book.id)
        return {
          ...b,
          foiLido: !b.foiLido,
        };
      return b;
    };
    setBooksState((prev) => {
      return {
        ...prev,
        books: prev.books.map(toggleLido),
        shownBooks: prev.shownBooks.map(toggleLido),
      };
    });
  };

  return (
    <CardActions>
      <BtnApagar onClick={apagar} type='button'>
        <FaTrash />
      </BtnApagar>
      <BtnFavorito favorito={book.favorito} onClick={favoritar} type='button'>
        <FaHeart />
      </BtnFavorito>
      <BtnLido lido={book.foiLido} type='button' onClick={marcarLido}>
        <FaCheck />
      </BtnLido>
    </CardActions>
  );
};

const CardActions = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const BtnFavorito = styled.button<{ favorito: boolean }>`
  ${(props) => (props.favorito ? 'color: #fff !important;' : null)}
  ${(props) => (props.favorito ? 'background-color: #ef476f;' : null)};

  :hover {
    color: #ef476f;
  }
`;

const BtnLido = styled.button<{ lido: boolean }>`
  ${(props) => (props.lido ? 'color: #fff !important;' : null)}
  ${(props) => (props.lido ? 'background: #06d6a0;' : null)};

  :hover {
    color: #06d6a0;
  }
`;

const BtnApagar = styled.button`
  :hover {
    color: #ef476f;
  }
`;

export default BookCardActions;
