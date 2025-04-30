import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/Dashboard/sideMenu/AppSidebar';
import EditCourseDetails from '../Dashboared/EditCourseDetailsPage/EditCourseDetails';
//import { Outlet } from 'react-router';

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className=" w-full h-full  p-6 ">
        <EditCourseDetails />
      </div>
      <main>
        <div className="md:hidden absolute bottom-4 right-4 size-8 flex items-center justify-center bg-button-secondary rounded-full text-white cursor-pointer hover:bg-button-secondary-hover">
          <SidebarTrigger />
        </div>

        {/* Uncomment the line below to enable nested routing */}
        {/*   <Outlet />*/}
      </main>
    </SidebarProvider>
  );
}
