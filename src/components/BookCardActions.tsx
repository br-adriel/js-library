import { useContext } from 'react';
import { FaCheck, FaHeart, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import BooksContext from '../contexts/BooksContext';
import { Livro } from '../global/types';

interface IProps {
  book: Livro;
}

const BookCardActions: React.FC<IProps> = ({ book }) => {
  const { setBooksState } = useContext(BooksContext);

  const apagar = () => {
    setBooksState((prev) => {
      return {
        books: prev.books.filter((b) => b.id !== book.id),
      };
    });
  };

  const favoritar = () => {
    setBooksState((prev) => {
      return {
        books: prev.books.map((b) => {
          if (b.id === book.id) b.favorito = !b.favorito;
          return b;
        }),
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
      <BtnLido lido={book.foiLido} type='button'>
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
