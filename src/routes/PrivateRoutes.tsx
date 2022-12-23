import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthGoogleContext } from '../contexts/AuthGoogleContext';

const PrivateRoutes = () => {
  const { signed } = useContext(AuthGoogleContext);
  return signed ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoutes;
