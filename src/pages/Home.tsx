import TopCources from '@/components/TopCourses/TopCourses';
import TopInstructors from '@/components/TopInstructors/TopInstructors';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation(['home/home']);

  return (
    <div className="flex flex-col  justify-center min-h-screen">
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>

      <div className="flex gap-2 my-4">
        <button
          onClick={() => i18n.changeLanguage('en')}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          English
        </button>
        <button
          onClick={() => i18n.changeLanguage('ar')}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          عربي
        </button>
      </div>
      <TopCources />
      <TopInstructors />
    </div>
  );
}
