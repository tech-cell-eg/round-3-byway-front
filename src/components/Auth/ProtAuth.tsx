import { JSX } from 'react';
import { Navigate } from 'react-router';

import { toast } from 'react-toastify';

interface Props {
  children: JSX.Element;
}

const ProtAuth = ({ children }: Props) => {
  const userLocal = localStorage.getItem('user');

  if (userLocal) {
    toast.warn('You are already logged in');
    return <Navigate to={'/'} />;
  }

  return children;
};

export default ProtAuth;
