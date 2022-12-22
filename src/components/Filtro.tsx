import React from 'react';
import styled from 'styled-components';

const Filtro: React.FC<{ children: any }> = ({ children }) => {
  return <FiltroTag>{children}</FiltroTag>;
};

const FiltroTag = styled.div`
  display: flex;
  justify-content: center;

  button:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  button:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }

  .selecionado {
    background-color: #0096c7;
    color: #fff;
  }

  .selecionado:hover {
    background-color: #0096c7;
  }
`;

export default Filtro;
