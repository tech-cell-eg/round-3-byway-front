import {
  ShoppingCart,
  Heart,
  Bell,
  Plus,
  Telescope,
  SquareCode,
  Briefcase,
  Atom,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  MoveRight,
  MoveLeft,
  LucideIcon,
  Award,
  GraduationCap,
  Play,
  BookText,
  Search,
  Settings,
  Sun,
  Moon,
  LogOut,
  X,
  UserRound,
  BookOpenText,
  LayoutDashboard,
  Check,
  Quote,
  ArrowRightFromLine,
  Gauge,
  CircleDollarSign,
  MessagesSquare,
  Menu,
  Podcast,
  Library,
  Clapperboard,
  Globe,
  Download,
} from 'lucide-react';

export type IconName =
  | 'x'
  | 'search'
  | 'video'
  | 'award'
  | 'play'
  | 'cart'
  | 'heart'
  | 'bell'
  | 'plus'
  | 'telescope'
  | 'code'
  | 'briefcase'
  | 'physics'
  | 'star'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevron-down'
  | 'arrow-right'
  | 'arrow-left'
  | 'graduationcap'
  | 'book-text'
  | 'gear'
  | 'sun'
  | 'moon'
  | 'user'
  | 'book-open'
  | 'dashboard'
  | 'logout'
  | 'check'
  | 'qoute'
  | 'arrow-right-from-line'
  | 'gauge'
  | 'circle-dollar-sign'
  | 'messages-square'
  | 'menu'
  | 'podcast'
  | 'library'
  | 'globe'
  | 'download';

const iconMap: Record<IconName, LucideIcon> = {
  x: X,
  search: Search,
  cart: ShoppingCart,
  heart: Heart,
  bell: Bell,
  plus: Plus,
  telescope: Telescope,
  code: SquareCode,
  briefcase: Briefcase,
  physics: Atom,
  star: Star,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'chevron-up': ChevronUp,
  'chevron-down': ChevronDown,
  'arrow-right': MoveRight,
  'arrow-left': MoveLeft,
  gear: Settings,
  sun: Sun,
  moon: Moon,
  logout: LogOut,
  user: UserRound,
  'book-open': BookOpenText,
  dashboard: LayoutDashboard,
  menu: Menu,
  library: Library,
  video: Clapperboard,
  'book-text': BookText,
  check: Check,
  qoute: Quote,
  'arrow-right-from-line': ArrowRightFromLine,
  gauge: Gauge,
  'circle-dollar-sign': CircleDollarSign,
  'messages-square': MessagesSquare,
  podcast: Podcast,
  graduationcap: GraduationCap,
  award: Award,
  play: Play,
  globe: Globe,
  download: Download,
};

interface IconProps {
  name: IconName;
  size?: number | string;
  className?: string;
  onClick?: () => void;
}

function Icon({ name, size = 21, className = '', onClick }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(
      `Icon "${name}" is not defined in iconMap. Check your name prop or iconMap.`
    );
    return null;
  }

  return <IconComponent size={size} className={className} onClick={onClick} />;
}

export function Facebook() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

export function Twitter() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

export function Youtube() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  );
}

export function Linkedin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export function Instagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default Icon;
