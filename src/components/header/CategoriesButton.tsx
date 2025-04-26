import { useTranslation } from 'react-i18next';
import Icon from '../Icon';

type CategoriesButtonProps = {
  handleListToggle: (list: string) => void;
};

function CategoriesButton({ handleListToggle }: CategoriesButtonProps) {
  const { t } = useTranslation(['header']);

  const handleClick = () => {
    handleListToggle('category-dropdown');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex items-center gap-1 text-body-small cursor-pointer"
    >
      {t('categoriesButton')}
      <Icon name="chevron-down" />
    </button>
  );
}

export default CategoriesButton;
