import { Navigate } from 'react-router-dom';
import { AuthGoogleContext } from '../contexts/AuthGoogleContext';
import { useContext } from 'react';

const Login = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);

  if (signed) return <Navigate to='/' />;
  return (
    <main>
      <button onClick={() => signInGoogle()}>Entrar com google</button>
    </main>
  );
};

export default Login;
