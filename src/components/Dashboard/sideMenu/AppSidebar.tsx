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
import appName from '@/components/constants/appName';
import { Link, useLocation } from 'react-router';
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
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { useTranslation } from 'react-i18next';

// Menu items.
const items = (t: (key: string) => string) => [
  {
    title: t('dashboard'),
    url: '/dashboard',
    icon: <Icon name="gauge" size={24} />,
  },
  {
    title: t('courses'),
    url: '/dashboard/dashboardCourses',
    icon: <Icon name="book-text" size={24} />,
  },
  {
    title: t('commuincation'),
    url: '#',
    icon: <Icon name="messages-square" size={24} />,
  },
  {
    title: t('revenue'),
    url: '/dashboard/revenue',
    icon: <Icon name="circle-dollar-sign" size={24} />,
  },
  {
    title: t('settings'),
    url: '#',
    icon: <Icon name="gear" size={24} />,
  },
];

export function AppSidebar() {
  const { t } = useTranslation(['dashboard/sidebar']);
  const { open } = useSidebar();
  const { pathname } = useLocation();
  console.log(pathname);

  const handleLogout = () => {
    console.log('logout');
  };

  const links = items(t);
  return (
    <Sidebar
      collapsible="icon"
      className="bg-surface-dark-secondary md:bg-surface-dark-secondary !bg-opacity-100"
    >
      <SidebarContent>
        <SidebarGroup className="!p-0">
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
            <SidebarMenu className="mt-6">
              {links.map(item => (
                <SidebarMenuItem
                  key={item.title}
                  className="!text-content-light"
                >
                  <SidebarMenuButton asChild className="py-7">
                    <Link
                      to={item.url}
                      className={`hover:bg-surface-dark-primary ${
                        pathname === item.url &&
                        'flex items-center gap-4 py-2 px-4 text-accent-primary border-l-2 border-accent-primary'
                      }`}
                    >
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
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          {open && <p>{t('footer.hi')} John</p>}
        </div>

        {open && (
          <div className="text-content-light !bg-surface-dark-secondary border-0">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Icon name="menu" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="!text-content-light !bg-surface-dark-secondary rounded-small flex items-start flex-col *:py-2.5 *:cursor-pointer *:hover:bg-surface-dark-primary *:w-full">
                <DropdownMenuItem>
                  <Link to="/">{t('footer.goToWebsite')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ThemeToggle />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LanguageToggle />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className="text-content-light" onClick={handleLogout}>
                    {t('footer.logOut')}
                  </button>
                </DropdownMenuItem>
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
