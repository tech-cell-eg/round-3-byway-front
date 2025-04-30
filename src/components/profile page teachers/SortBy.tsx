import { useTranslation } from 'react-i18next';

const SortBy = () => {
  const { t } = useTranslation('userProfile/Filter');
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
      <label className="text-sm text-gray-600">{t('filter.sortBy')}</label>
      <select className="border border-gray-100 rounded-xl px-4 py-2 text-sm outline-none w-full sm:w-auto">
        <option value="relevance">{t('filter.relevance')}</option>
        <option value="name">{t('filter.name')}</option>
        <option value="title">{t('filter.title')}</option>
      </select>
    </div>
  );
};

export default SortBy;
