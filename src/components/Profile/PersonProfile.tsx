import defualtImg from '@/assets/InstructorImg.png';
import { useTranslation } from 'react-i18next';
import { ShareSection } from './ShareSection';
import ProfileCards from './Profilecards';

export default function PersonProfile() {
  const { t } = useTranslation('Profile/personProfile');

  return (
    <div>
      <div className="bg-surface-light-secondary rounded-2xl">
        <div className="flex-col items-center text-center pt-5">
          <img
            src={defualtImg}
            className="rounded-full w-[200px] mx-auto h-[200px] min-w-[100px] min-h-[100px]"
          />
          <h6 className="py-5 font-bold text-xl">{t('personMain.name')}</h6>
          <ShareSection />
          <ProfileCards />
        </div>
      </div>
    </div>
  );
}
