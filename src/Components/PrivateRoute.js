import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

// Replace this with your actual authentication logic
const useAuth = () => {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';
  return { loggedIn };
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      element={loggedIn ? <Component /> : navigate('/login')}
    />
  );
};

export default PrivateRoute;
