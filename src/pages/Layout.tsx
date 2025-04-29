import Overlay from '@/components/CommonComponents/Overlay';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/header/Header';
import Menu from '@/components/header/Menu';
import { useState } from 'react';
import { Outlet } from 'react-router';

export const Layout = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  const handleMenuVisibility = () => {
    setMenuVisibility(prev => !prev);
  };

  return (
    <div className="relative">
      <Header handleMenuVisibility={handleMenuVisibility} />
      <Outlet />
      {menuVisibility && (
        <Overlay onClickFn={setMenuVisibility}>
          <Menu setMenuVisibility={setMenuVisibility} />
        </Overlay>
      )}
      <Footer />
    </div>
  );
};
