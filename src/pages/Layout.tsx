import Footer from '@/components/Footer/Footer';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};
