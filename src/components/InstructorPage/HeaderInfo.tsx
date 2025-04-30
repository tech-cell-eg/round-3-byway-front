import { useTranslation } from 'react-i18next';

const InstructorInfo = () => {
  const { t, i18n } = useTranslation('InstructorPage/headerinfo');
  const lang = i18n.language;

  const expertise = t('instructor.expertise', {
    returnObjects: true,
  }) as string[];
  const name = t('instructor.name');

  return (
    <div className={`max-w-5xl mx-13 p-6 ${lang === 'ar' ? 'text-right' : ''}`}>
      <p className="text-sm text-gray-500">{t('instructor.title')}</p>
      <h1 className="text-[32px] font-semibold pt-2">{name}</h1>
      <p className="text-gray-600">{t('instructor.job')}</p>

      <div className="flex gap-10 my-6">
        <div>
          <p className="text-gray-600">{t('instructor.totalStudents')}</p>
          <p className="text-2xl font-semibold">1000</p>
        </div>
        <div>
          <p className="text-gray-600">{t('instructor.reviews')}</p>
          <p className="text-2xl font-semibold">154</p>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="font-semibold text-xl mb-2">
          {t('instructor.aboutTitle', { name })}
        </h2>
        <p className="text-gray-700 text-[16px]">
          {t('instructor.about', { name })}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-xl mb-2">
          {t('instructor.expertiseTitle')}
        </h2>
        <ul className="list-disc list-inside text-gray-700 pl-4">
          {expertise.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-semibold text-xl mb-2">
          {t('instructor.experienceTitle')}
        </h2>
        <p className="text-gray-700">{t('instructor.experience', { name })}</p>
      </section>
    </div>
  );
};

export default InstructorInfo;
