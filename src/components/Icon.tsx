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
  Video,
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
  ArrowRightFromLine,
  Gauge,
  CircleDollarSign,
  MessagesSquare,
  Menu,
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
  | 'arrow-right-from-line'
  | 'gauge'
  | 'circle-dollar-sign'
  | 'messages-square'
  | 'menu';

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
  award: Award,
  play: Play,
  video: Video,
  graduationcap: GraduationCap,
  'book-text': BookText,
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
  check: Check,
  'arrow-right-from-line': ArrowRightFromLine,
  gauge: Gauge,
  'circle-dollar-sign': CircleDollarSign,
  'messages-square': MessagesSquare,
  menu: Menu,
};

interface IconProps {
  name: IconName;
  size?: number;
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

export default Icon;
