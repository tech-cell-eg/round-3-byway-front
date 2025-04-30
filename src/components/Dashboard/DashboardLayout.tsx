import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/Dashboard/sideMenu/AppSidebar';
import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function DashboardLayout() {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  });
  return (
    <div className="w-full">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full p-5 bg-surface-light-secondary">
          <div className="md:hidden absolute bottom-4 right-4 size-8 flex items-center justify-center bg-button-secondary rounded-full text-white cursor-pointer hover:bg-button-secondary-hover">
            <SidebarTrigger />
          </div>
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}
