import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

export default function SortedBy() {
  const { t } = useTranslation('Category/sortBy');

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="appearance-none flex !border-0 !focus:border-0">
          {t('Relevance')}
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuSeparator />
          <DropdownMenuItem>{t('Newest')}</DropdownMenuItem>
          <DropdownMenuItem>{t('Highest Rated')}</DropdownMenuItem>
          <DropdownMenuItem>{t('Most Enrolled')}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
