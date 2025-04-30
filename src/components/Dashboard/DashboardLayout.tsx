import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/Dashboard/sideMenu/AppSidebar';
import { Outlet } from 'react-router';
import { useSidebar } from '@/components/ui/sidebar';
import { useEffect, useState } from 'react';

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <DashboardContent />
    </SidebarProvider>
  );
}

function DashboardContent() {
  const { open } = useSidebar();
  const [isRTL, setIsRTL] = useState(false); // state for detecting RTL

  useEffect(() => {
    // Automatically detect the direction of the page
    const direction = document.documentElement.dir; // Checks the document direction
    setIsRTL(direction === 'rtl');
  }, []);

  return (
    <div
      className={`flex min-h-screen w-full overflow-hidden ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Fixed Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <main
        className={`transition-all duration-300 w-full ${
          isRTL
            ? open
              ? 'mr-0 ' // No margin when sidebar is open in RTL
              : ' ml-0' // No margin when sidebar is closed in RTL
            : open
              ? '  ml-0' // Shift content to the right when the sidebar is open in LTR
              : 'ml-0' // No margin when sidebar is closed in LTR
        }`}
      >
        {/* Toggle button (only visible on mobile) */}
        <div className="md:hidden absolute bottom-4 right-4 size-8 flex items-center justify-center bg-button-secondary rounded-full text-white cursor-pointer hover:bg-button-secondary-hover z-50">
          {/* Button to open/close sidebar */}
          <SidebarTrigger />
        </div>

        {/* Page content */}
        <Outlet />
      </main>
    </div>
  );
}
