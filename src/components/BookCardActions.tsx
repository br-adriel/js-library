import styled from 'styled-components';
import { FaTrash, FaHeart, FaCheck } from 'react-icons/fa';
import { useContext } from 'react';
import BooksContext from '../contexts/BooksContext';

interface IProps {
  favorito: boolean;
  lido: boolean;
  id: string;
}

const BookCardActions: React.FC<IProps> = ({ favorito, lido, id }) => {
  const { setBooksState } = useContext(BooksContext);
  const apagar = () => {
    setBooksState((prev) => {
      return {
        books: prev.books.filter((b) => b.id !== id),
      };
    });
  };
  return (
    <CardActions>
      <BtnApagar onClick={apagar}>
        <FaTrash />
      </BtnApagar>
      <BtnFavorito favorito={favorito}>
        <FaHeart />
      </BtnFavorito>
      <BtnLido lido={lido}>
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
