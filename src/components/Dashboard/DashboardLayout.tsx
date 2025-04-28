import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/Dashboard/sideMenu/AppSidebar';
import { Outlet } from 'react-router';

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="md:hidden absolute top-4 right-4">
          <SidebarTrigger />
        </div>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
