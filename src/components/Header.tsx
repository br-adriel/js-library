import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';
import { FaPlus } from 'react-icons/fa';
import Filtro from './Filtro';
import { useContext, useState } from 'react';
import ModalContext from '../contexts/ModalContext';
import BooksContext from '../contexts/BooksContext';

const Header = () => {
  const { setModalState } = useContext(ModalContext);
  const { setBooksState, booksState } = useContext(BooksContext);

  const mostrarTodos = () => {
    setBooksState((prev) => {
      return {
        ...prev,
        shownBooks: prev.books,
        guia: 'todos',
      };
    });
  };

  const mostrarNaoLidos = () => {
    setBooksState((prev) => {
      return {
        ...prev,
        shownBooks: prev.books.filter((b) => b.foiLido === false),
        guia: 'nao-lidos',
      };
    });
  };

  const mostrarLidos = () => {
    setBooksState((prev) => {
      return {
        ...prev,
        shownBooks: prev.books.filter((b) => b.foiLido === true),
        guia: 'lidos',
      };
    });
  };

  const mostrarFavoritos = () => {
    setBooksState((prev) => {
      return {
        ...prev,
        shownBooks: prev.books.filter((b) => b.favorito === true),
        guia: 'favoritos',
      };
    });
  };

  return (
    <HeaderTag>
      <h1>Biblioteca</h1>
      <ButtonWrapper>
        <Filtro>
          <button
            type='button'
            onClick={mostrarTodos}
            className={booksState.guia === 'todos' ? 'selecionado' : ''}
          >
            Todos
          </button>
          <button
            type='button'
            onClick={mostrarNaoLidos}
            className={booksState.guia === 'nao-lidos' ? 'selecionado' : ''}
          >
            Não lidos
          </button>
          <button
            type='button'
            onClick={mostrarLidos}
            className={booksState.guia === 'lidos' ? 'selecionado' : ''}
          >
            Lidos
          </button>
          <button
            type='button'
            onClick={mostrarFavoritos}
            className={booksState.guia === 'favoritos' ? 'selecionado' : ''}
          >
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
