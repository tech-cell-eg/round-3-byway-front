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
} from 'lucide-react';

type IconName =
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
  | 'cheveron-down'
  | 'arrow-right'
  | 'arrow-left';

const iconMap: Record<IconName, LucideIcon> = {
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
  'cheveron-down': ChevronDown,
  'arrow-right': MoveRight,
  'arrow-left': MoveLeft,
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
