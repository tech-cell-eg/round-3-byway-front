import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Check } from 'lucide-react';

type SortOption = 'Sort By' | 'Newest' | 'Highest Rated' | 'Most Enrolled';

export default function SortedBy() {
  const { t } = useTranslation('Category/sortBy');
  const [selectedSort, setSelectedSort] = useState<SortOption>('Sort By');

  const handleSortChange = (sortOption: SortOption) => {
    setSelectedSort(sortOption);
  };

  const sortOptions: SortOption[] = [
    'Newest',
    'Highest Rated',
    'Most Enrolled',
  ];

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 appearance-none focus:outline-none">
          <span className="text-gray-800 text-sm font-medium">
            {selectedSort === 'Sort By' ? t('Sort By') : t(selectedSort)}
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white shadow-lg rounded-lg p-1 mt-1 border border-gray-100 w-48">
          <DropdownMenuSeparator className="border-t border-gray-200 my-1" />
          {sortOptions.map(option => (
            <DropdownMenuItem
              key={option}
              onClick={() => handleSortChange(option)}
              className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors duration-150 ${
                selectedSort === option
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-800 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span>{t(option)}</span>
              {selectedSort === option && (
                <Check className="w-4 h-4 text-blue-600" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
