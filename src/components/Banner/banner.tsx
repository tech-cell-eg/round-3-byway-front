import womanglasses from '../../assets/images/Banner/womanglasses.png';
import manglasses from '../../assets/images/Banner/manglasses.png';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/Redux/reduxHooks';

const Banner = () => {
  const { t, i18n } = useTranslation(['home/banner']);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('user') !== null;
  const isRTL = i18n.language === 'ar';
  const role = localStorage.getItem('role') || 'student';
  const userToken = useAppSelector(state => state.user.token);

  const handleInstructorClick = () => {
    if (isLoggedIn) {
      if (role === 'instructor') {
        navigate('/InstructorPage');
      } else if (!userToken) {
        navigate('/signup-instructor');
      }
    }
  };

  const handleStudentClick = () => {
    if (isLoggedIn) {
      if (role === 'students') {
        navigate('/coursespage');
      } else if (!userToken) {
        navigate('/SignUp');
      }
    }
  };

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <section className="flex flex-col items-center justify-center gap-60px py-16 px-4">
        {/* Instructor */}
        <div className="flex flex-col md:flex-row items-center gap-40 max-w-5xl w-full">
          <img
            src={womanglasses}
            alt="Instructor"
            className="w-[400px] h-[425px] rounded-[2rem] p-2"
            loading="lazy"
          />
          <div
            className={`max-w-md w-full flex flex-col ${
              isRTL ? 'items-end text-right' : 'items-start text-left'
            }`}
          >
            <h2 className="text-xl text-content-primary font-bold text-black mb-4">
              {t('Instructor.header')}
            </h2>
            <p className="text-[#1D2939] text-sm mb-4">
              {t('Instructor.description')}
            </p>
            <button
              onClick={handleInstructorClick}
              className="px-6 py-2.5 bg-button-tertiary text-content-light w-fit rounded-small mt-3 hover:cursor-pointer flex flex-row items-center gap-1.5"
            >
              {t('Instructor.button')}
              <div
                className={`${isRTL && 'rotate-180 flex items-center justify-center'}`}
              >
                <ArrowRight size={16} />
              </div>
            </button>
          </div>
        </div>

        {/* Student */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-40 max-w-5xl w-full">
          <img
            src={manglasses}
            alt="Student"
            className="w-[471.5px] h-[385px] rounded-[2rem] p-2"
            loading="lazy"
          />
          <div
            className={`max-w-md w-full flex flex-col ${
              isRTL ? 'items-end text-right' : 'items-start text-left'
            }`}
          >
            <h2 className="text-xl text-content-primary font-bold text-black mb-4">
              {t('Student.header')}
            </h2>
            <p className="text-[#1D2939] text-sm mb-4">
              {t('Student.description')}
            </p>
            <button
              onClick={handleStudentClick}
              className="px-6 py-2.5 bg-button-tertiary text-content-light w-fit rounded-small mt-3 hover:cursor-pointer flex flex-row items-center gap-1.5"
            >
              {t('Student.button')}
              <div
                className={`${isRTL && 'rotate-180 flex items-center justify-center'}`}
              >
                <ArrowRight size={16} />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
