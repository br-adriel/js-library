import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';
import { FaPlus } from 'react-icons/fa';
import Filtro from './Filtro';
import { useContext } from 'react';
import ModalContext from '../contexts/ModalContext';

const Header = () => {
  const { setModalState } = useContext(ModalContext);
  return (
    <HeaderTag>
      <h1>Biblioteca</h1>
      <ButtonWrapper>
        <Filtro>
          <button type='button'>Todos</button>
          <button type='button' id='filtro-nao-lidos'>
            Não lidos
          </button>
          <button type='button' id='filtro-lidos'>
            Lidos
          </button>
          <button type='button' id='filtro-favoritos'>
            Favoritos
          </button>
        </Filtro>
        <button
          type='button'
          onClick={() => setModalState({ show: true })}
          title='Adicionar livro'
        >
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
