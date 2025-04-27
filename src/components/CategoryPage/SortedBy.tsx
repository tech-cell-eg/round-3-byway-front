import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function SortedBy() {
  const { t } = useTranslation('Category/sortBy');

  const [selected, setSelected] = useState('Relevance');

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="appearance-none px-2 py-1 flex items-center gap-1 !border-0 !focus:border-0">
          {t(selected)}
          <ChevronDown size={18} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white !rounded-lg">
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleSelect('Newest')}>
            {t('Newest')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect('Highest Rated')}>
            {t('Highest Rated')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect('Most Enrolled')}>
            {t('Most Enrolled')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
