import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoutes from './PrivateRoutes';

const AppRoutes = () => {
  return (
    <BrowserRouter basename='/js-library'>
      <Routes>
        <Route path='/' element={<PrivateRoutes />}>
          <Route path='' element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
