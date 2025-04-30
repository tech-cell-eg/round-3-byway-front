import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import Icon from '../Icon';
import { Link } from 'react-router';

function CategoriesButton() {
  const { t } = useTranslation(['header']);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="font-normal text-body-small focus-visible:ring-0 shadow-none cursor-pointer"
        >
          <Icon name="library" className="lg:hidden" />
          <span className="hidden lg:block">{t('categoriesButton')}</span>
          <Icon name="chevron-down" className="hidden lg:block" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-screen md:min-w-36 mt-dropdown p-0 bg-surface-light-primary border-none rounded-small shadow-panel">
        {Array.from({ length: 5 }).map((_, index) => (
          <Link key={index} to="/" className="">
            <DropdownMenuItem
              key={index}
              className="p-3 hover:bg-surface-highlight cursor-pointer"
            >
              Category {index + 1}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CategoriesButton;
