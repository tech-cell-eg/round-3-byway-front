import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const LeftSection: React.FC = () => {
  const { register } = useFormContext();
  const { t, i18n } = useTranslation(['DashBoard/editcourse']);
  const isRTL = i18n.language === 'ar';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="flex flex-col gap-6 w-full">
        {/* Course Name */}
        <div className="mb-4 border rounded-[10px] border-gray-300 p-3  items-center gap-3 bg-white">
          <label className="block mb-1 ">
            {t('editCourse.courseName')}{' '}
            <span className="text-red-500">*</span>{' '}
          </label>
          <input
            type="text"
            {...register('name', { required: true })}
            className="w-full  p-2 "
          />
        </div>

        {/* Video URL */}
        <div>
          <label className="block mb-1 text-l">
            {t('editCourse.videoUrl')} <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            {...register('videoUrl', { required: true })}
            className="w-full border border-gray-300 rounded-[10px] p-2 bg-white"
            placeholder={t('editCourse.videoUrlPlaceholder')}
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 ">
            {t('editCourse.imageUrl')} <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            {...register('imageUrl', { required: true })}
            className="w-full border border-gray-300 rounded-[10px] p-2 bg-white"
            placeholder={t('editCourse.imageUrlPlaceholder')}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 ">
            {' '}
            {t('editCourse.description')}{' '}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('description', { required: true })}
            className="w-full h-40 border border-gray-300 rounded-[10px] p-2 bg-white"
            placeholder={t('editCourse.descriptionPlaceholder')}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
