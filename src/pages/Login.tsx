import { AuthGoogleContext } from '../contexts/AuthGoogleContext';
import { useContext } from 'react';

const Login = () => {
  const { signInGoogle } = useContext(AuthGoogleContext);
  return (
    <main>
      <button onClick={() => signInGoogle()}>Entrar com google</button>
    </main>
  );
};

export default Login;
