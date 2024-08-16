import React, { useContext } from 'react'
import Login from './Login';
import { AuthContext } from '../contexts/authContext';

const ProtectedRoute = ({component: Component}) => {
    const { getInfoToken } = useContext(AuthContext);
    const { id } = getInfoToken();
  return (id ? <Component /> :  <Login /> )
}

export default ProtectedRoute