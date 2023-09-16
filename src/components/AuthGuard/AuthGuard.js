import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({checkedOut, children}) => {
    if(!checkedOut){
        return <Navigate to='/'/>
    }
  return children;
}

export default AuthGuard
