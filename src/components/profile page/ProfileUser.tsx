import { Button } from '@/components/ui/button';
import userimg from '@/assets/images/UserProfile/user_img.jpg';
import { Share2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const ProfileUser = () => {
  const { t } = useTranslation('userProfile/user');
  const [selected, setSelected] = useState('');

  return (
    <div className="p-6 bg-[#F8FAFC] rounded-2xl shadow-sm">
      <div className="flex flex-col items-center ">
        <img
          src={userimg}
          alt="John Doe"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{t('sidebar.name')}</h2>
        <Button
          variant="outline"
          className=" mb-6 border-gray-300 bg-white rounded-2xl shadow-sm p-5 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          {t('sidebar.shareProfile')} <Share2 />
        </Button>
        <nav className="w-full space-y-2 cursor-pointer">
          {['profile', 'myCourses', 'teachers', 'message', 'myReviews'].map(
            section => (
              <Button
                key={section}
                variant="ghost"
                className={`w-full justify-start border-t-1  border-gray-300  pt-2 cursor-pointer  ${
                  selected === section ? 'bg-black text-white' : ''
                }`}
                onClick={() => setSelected(section)}
              >
                {t(`sidebar.${section}`)}
              </Button>
            )
          )}
        </nav>
      </div>
    </div>
  );
};

export default ProfileUser;
