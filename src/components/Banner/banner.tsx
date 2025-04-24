import womanglasses from '../../assets/images/Banner/womanglasses.png';
import manglasses from '../../assets/images/Banner/manglasses.png';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

const Banner = () => {
  const { t } = useTranslation(['home/banner']);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('user') !== null;

  const handleInstructorClick = () => {
    if (isLoggedIn) {
      navigate('/'); // instructor page
    } else {
      navigate('/SignUp'); // login page
    }
  };

  const handleStudentClick = () => {
    if (isLoggedIn) {
      navigate('/'); //course page
    } else {
      navigate('/SignUp'); // login page
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-16 py-16 px-4 bg-white">
      {/* Instructor  */}
      <div className="flex flex-col md:flex-row items-center gap-20 max-w-5xl w-full">
        <img
          src={womanglasses}
          alt="Instructor"
          className="w-64 h-auto rounded-[2rem] p-2"
          loading="lazy"
        />
        <div className="text-center  md:text-left max-w-md">
          <h2 className="text-xl text-content-primary font-bold text-black mb-4">
            {t('Instructor.header')}
          </h2>
          <p className="text-[#1D2939] text-sm mb-4">
            {t('Instructor.description')}
          </p>

          <Button
            onClick={handleInstructorClick}
            className="w-[50%] bg-black text-white  rounded p-4 transition-all  hover:bg-gray-600 hover:text-surface-light-primary "
          >
            {t('Instructor.button')}
            <ArrowRight className=" h-9 w-9 text-white" />
          </Button>
        </div>
      </div>

      {/* Courses */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-20 max-w-5xl w-full">
        <img
          src={manglasses}
          alt="Student"
          className="w-70 h-auto rounded-[2rem] p-2"
          loading="lazy"
        />
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-xl text-content-primary font-bold text-black mb-4">
            {t('Student.header')}
          </h2>
          <p className="text-[#1D2939] text-sm mb-4">
            {t('Student.description')}
          </p>
          <Button
            onClick={handleStudentClick}
            className="w-[40%] bg-black text-white rounded p-4  transition-all  hover:bg-gray-600 hover:text-surface-light-primary "
          >
            {t('Student.button')}
            <ArrowRight className=" h-9 w-9 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
