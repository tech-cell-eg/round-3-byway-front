import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/Dashboard/sideMenu/AppSidebar';
import { Outlet } from 'react-router';

export default function DashboardLayout() {
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
