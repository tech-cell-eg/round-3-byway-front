import { useTranslation } from 'react-i18next';
import ToggleSwitch from './ToggleSwitch';

function LanguageToggle() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const toggleLanguage = (checked: boolean) => {
    i18n.changeLanguage(checked ? 'ar' : 'en');
  };

  return (
    <div className="flex items-center gap-3">
      <span className="">English</span>
      <ToggleSwitch
        checked={isArabic}
        onChange={toggleLanguage}
        //   label={isArabic ? 'AR' : 'EN'}
      />
      <span className="">العربية</span>
    </div>
  );
}

export default LanguageToggle;
