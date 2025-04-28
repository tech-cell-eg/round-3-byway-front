import React from 'react';
import { useTranslation } from 'react-i18next';

interface HeaderSectionProps {
  onSave: () => void;
  onCancel: () => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ onSave, onCancel }) => {
  const { t, i18n } = useTranslation(['DashBoard/editcourse']);
  const isRTL = i18n.language === 'ar';
  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">
          {t('editCourse.courseDetails')}
        </h2>
        <div className="flex gap-3">
          <button
            className="px-5 py-2 bg-gray-200 rounded-[5px] hover:bg-gray-300"
            onClick={onCancel}
          >
            {t('common.cancel')}
          </button>
          <button
            className="px-5 py-2 bg-green-600 text-white rounded-[5px] hover:bg-green-700"
            onClick={onSave}
          >
            {t('common.save')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
