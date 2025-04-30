// RightSection.tsx
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const RightSection: React.FC = () => {
  const { register } = useFormContext();
  const { t, i18n } = useTranslation(['DashBoard/editcourse']);
  const isRTL = i18n.language === 'ar';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="flex flex-col gap-6 w-full">
        {/* Course Price */}
        <div className="border rounded-[10px] border-gray-300 p-3 bg-white">
          <label className="block mb-1 ">{t('editCourse.price')}</label>
          <input
            type="number"
            {...register('price', { required: true, min: 0 })}
            className="w-full border border-gray-300 rounded-[10px] p-2"
            placeholder={t('editCourse.pricePlaceholder')}
          />
        </div>

        {/* Discount Percentage */}
        <div className="border rounded-[10px] border-gray-300 p-3 bg-white">
          <label className="block mb-1 ">{t('editCourse.discount')}</label>
          <input
            type="number"
            {...register('discount')}
            className="w-full border border-gray-300 rounded-[10px] p-2"
            placeholder={t('editCourse.discountPlaceholder')}
          />
        </div>
        {/*Language */}
        <div className="border rounded-[10px] border-gray-300 p-3 bg-white">
          <label className="block mb-1 ">{t('editCourse.language')}</label>
          <input />
        </div>
        {/* Course Level */}
        <div className="border rounded-[10px] border-gray-300 p-3 bg-white">
          <label className="block mb-1 ">{t('editCourse.courseLevel')}</label>
          <select
            {...register('courseLevel')}
            className="w-full border border-gray-300 rounded-[10px] p-2"
            defaultValue=""
          >
            <option value="" disabled>
              {t('editCourse.selectLevel')}
            </option>
            <option value="beginner">{t('editCourse.beginner')}</option>
            <option value="intermediate">{t('editCourse.intermediate')}</option>
            <option value="advanced">{t('editCourse.advanced')}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
