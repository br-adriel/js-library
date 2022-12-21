import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const ModalAddBook: React.FC<{ show: boolean }> = ({ show }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(show);
  }, [show]);
  return (
    <ModalBackground id='fundo-modal' show={showModal}>
      <Modal>
        <ModalTop>
          <h3>Novo livro</h3>
          <button onClick={() => setShowModal(false)}>
            <FaTimes />
          </button>
        </ModalTop>
        <form>
          <ModalFormItem>
            <label htmlFor='form-titulo'>Título:</label>
            <input type='text' name='titulo' id='form-titulo' required />
          </ModalFormItem>
          <ModalFormItem>
            <label htmlFor='form-autor'>Autor:</label>
            <input type='text' name='autor' id='form-autor' required />
          </ModalFormItem>
          <ModalFormItem>
            <label htmlFor='form-publicacao'>Ano de publicacao:</label>
            <input type='number' name='autor' id='form-publicacao' required />
          </ModalFormItem>
          <ModalFormItem>
            <label htmlFor='form-paginas'>Número de páginas:</label>
            <input
              type='number'
              name='paginas'
              id='form-paginas'
              min='1'
              required
            />
          </ModalFormItem>
          <ModalFormItem>
            <label htmlFor='form-lido'>
              <input type='checkbox' name='foiLido' id='form-lido' />
              Já li esse livro
            </label>
          </ModalFormItem>
          <ModalFormItem>
            <label htmlFor='form-favorito'>
              <input type='checkbox' name='favorito' id='form-favorito' />
              Marcar como favorito
            </label>
          </ModalFormItem>
          <button type='submit'>Salvar</button>
        </form>
      </Modal>
    </ModalBackground>
  );
};

const ModalBackground = styled.div<{ show: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 95%;
  padding: 1rem;
  background-color: #edf2f4;
  border-radius: 0.25rem;
  font-size: 1.2rem;

  input {
    font-size: 1.2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  form button {
    background-color: #0096c7;
    color: #fff;
    font-weight: bold;
    border-radius: 0.25rem;
    transition: 0.3s background;
  }

  form button:hover {
    background-color: #10a6d7;
  }

  @media (min-width: 600px) {
    width: 60%;
  }

  @media (min-width: 900px) {
    width: 40%;
  }

  @media (min-width: 1280px) {
    width: 30%;
    max-width: 400px;
  }
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  button {
    background-color: transparent;
    padding: 0;
  }

  button:hover {
    color: #555;
  }
`;

const ModalFormItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export default ModalAddBook;
