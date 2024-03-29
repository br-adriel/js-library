import styled from 'styled-components';

const ButtonWrapper = styled.section`
  background-color: #2b2d42;
  color: #fff;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    background-color: #edf2f4;
  }

  button:hover {
    background-color: #feffff;
  }

  & > button {
    border-radius: 0.5rem;
  }
`;

export default ButtonWrapper;
