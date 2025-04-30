import Header from '@/components/header/Header';
import { useState } from 'react';
import { Outlet } from 'react-router';

export const Layout = () => {
  const [isLoggedIn] = useState<boolean>(false);

  return (
    <div className="relative">
      <Header isLoggedIn={isLoggedIn} />
      <Outlet />
    </div>
  );
};
