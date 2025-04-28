import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import logoImg from '@/assets/logo.png';
import appName from '@/constants/appName';
import { Link } from 'react-router';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import Icon from '@/components/Icon';
import ThemeToggle from '@/components/header/ThemeToggle';
import LanguageToggle from '@/components/header/LanguageToggle';

// Menu items.
const items = [
  {
    title: 'Dashboard',
    url: '#',
    icon: <Icon name="gauge" size={24} />,
  },
  {
    title: 'Courses',
    url: '#',
    icon: <Icon name="book-text" size={24} />,
  },
  {
    title: 'Communication',
    url: '#',
    icon: <Icon name="messages-square" size={24} />,
  },
  {
    title: 'Revenue',
    url: '#',
    icon: <Icon name="circle-dollar-sign" size={24} />,
  },
  {
    title: 'Settings',
    url: '#',
    icon: <Icon name="gear" size={24} />,
  },
];

export function AppSidebar() {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon" className="bg-surface-dark-secondary">
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex items-center gap-3">
                {open && (
                  <>
                    <img
                      src={logoImg}
                      alt="logo"
                      className="w-full object-cover"
                    />
                    <p className="text-content-light text-body-large">
                      {appName}
                    </p>
                  </>
                )}
              </div>
              <span>
                <CustomTrigger />
              </span>
            </div>
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu className="mt-6 ">
              {items.map(item => (
                <SidebarMenuItem
                  key={item.title}
                  className="!text-content-light"
                >
                  <SidebarMenuButton asChild className="py-7">
                    <Link to={item.url}>
                      {item.icon}
                      <span className="text-body-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex flex-row justify-between items-center">
        <div className="flex text-content-light items-center gap-3">
          {/* avatar */}
          <div className="size-7 rounded-full bg-surface-light-primary"></div>
          {open && <p>Hi, John</p>}
        </div>

        {open && (
          <div className="text-content-light !bg-surface-dark-secondary border-0">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Icon name="menu" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="!text-content-light !bg-surface-dark-secondary rounded-small  flex items-center flex-col">
                <DropdownMenuItem>Go to Website</DropdownMenuItem>
                <DropdownMenuItem>
                  <ThemeToggle />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LanguageToggle />
                </DropdownMenuItem>
                <DropdownMenuItem>Log Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}

export function CustomTrigger() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <div>
      <Icon
        name="arrow-right-from-line"
        className={`size-6 text-content-light ${open ? 'rotate-180' : ''}`}
        onClick={toggleSidebar}
      />
    </div>
  );
}
