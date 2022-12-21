import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';
import { FaPlus } from 'react-icons/fa';
import Filtro from './Filtro';

const Header = () => {
  return (
    <HeaderTag>
      <h1>Biblioteca</h1>
      <ButtonWrapper>
        <Filtro>
          <button id='filtro-todos' className='selecionado'>
            Todos
          </button>
          <button id='filtro-nao-lidos'>Não lidos</button>
          <button id='filtro-lidos'>Lidos</button>
          <button id='filtro-favoritos'>Favoritos</button>
        </Filtro>
        <button id='btn-novo-livro'>
          <FaPlus />
        </button>
      </ButtonWrapper>
    </HeaderTag>
  );
};

const HeaderTag = styled.header`
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #2b2d42;
  color: #fff;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export default Header;
