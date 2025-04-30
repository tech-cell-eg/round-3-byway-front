import { Input } from '../ui/input';
import Icon from '../Icon';
import { useState, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

interface SearcharVerificationProps {
  onSearch: (id: string) => void;
}

const SearcharVerification = ({ onSearch }: SearcharVerificationProps) => {
  const { t } = useTranslation(['header']);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    if (searchValue.trim()) {
      onSearch(searchValue.trim());
      setSearchValue('');
    }
  };

  return (
    <div className="flex items-center w-[45%] h-[40px] border border-border-dark rounded-small overflow-hidden">
      <div className="flex items-center w-full">
        <div className="h-full px-2.5">
          <Icon name="search" />
        </div>
        <Input
          type="search"
          value={searchValue}
          onChange={handleInputChange}
          placeholder={t('search.placeholder')}
          className="ps-1 py-2.5 border-none placeholder:text-placeholder focus-visible:ring-0 selection:bg-surface-highlight"
        />
      </div>
      {searchValue && (
        <button
          type="button"
          className="h-full px-2.5 hover:bg-surface-highlight cursor-pointer"
          onClick={handleSearch}
        >
          {t('search.button')}
        </button>
      )}
    </div>
  );
};

export default SearcharVerification;
