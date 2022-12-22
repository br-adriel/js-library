import { FaBookOpen, FaCalendarAlt, FaUser } from 'react-icons/fa';
import styled from 'styled-components';
import { Livro } from '../global/types';
import BookCardActions from './BookCardActions';

const BookCard: React.FC<{ livro: Livro }> = ({ livro }) => {
  return (
    <Card>
      <h3>{livro.titulo}</h3>
      <p>
        <FaUser />
        <span>{livro.autor}</span>
      </p>
      <p>
        <FaCalendarAlt />
        <span>{livro.publicacao}</span>
      </p>
      <p>
        <FaBookOpen />
        <span>{livro.paginas} páginas</span>
      </p>
      <BookCardActions book={livro} />
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  background: linear-gradient(65deg, #006d77, #003566);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.25rem;
  gap: 0.5rem;
  color: #fff;

  h3 {
    font-size: 1.4rem;
  }

  p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    border-radius: 0.25rem;
    color: #aaa;
    transition: 0.2s background, 0.2s color;
  }
`;

export default BookCard;
