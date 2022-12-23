import { Navigate } from 'react-router-dom';
import { AuthGoogleContext } from '../contexts/AuthGoogleContext';
import { useContext } from 'react';
import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);

  if (signed) return <Navigate to='/' />;
  return (
    <LoginPage>
      <Content>
        <h2>Faça login para continuar</h2>
        <button onClick={() => signInGoogle()} type='button'>
          <FaGoogle />
          Entrar com o Google
        </button>
      </Content>
    </LoginPage>
  );
};

const LoginPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 60px;
  flex-direction: column;
  gap: 25px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  button {
    padding: 15px 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 30px;
    background: #4c86f9;
    color: #fff;

    :hover {
      background: #1b68f7;
    }
  }
`;

export default Login;
