import womanglasses from '../../assets/images/Banner/womanglasses.png';
import manglasses from '../../assets/images/Banner/manglasses.png';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation(['banner']);

  return (
    <section className="flex flex-col items-center justify-center gap-16 py-16 px-4 bg-white">
      {/* Instructor  */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl w-full">
        <img
          src={womanglasses}
          alt="Instructor"
          className="w-64 h-auto rounded-[2rem] p-2"
          loading="lazy"
        />
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-3xl font-bold text-black mb-4">
            {t('Instructor.header')}
          </h2>
          <p className="text-[#1D2939] text-sm mb-4">
            {t('Instructor.description')}
          </p>
          <button className="flex items-center justify-center gap-1 bg-black text-white rounded-[8px]  py-2 px-4">
            {t('Instructor.button')}
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Courses */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-5xl w-full">
        <img
          src={manglasses}
          alt="Student"
          className="w-70 h-auto rounded-[2rem] p-2"
          loading="lazy"
        />
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-3xl font-bold text-black mb-4">
            {t('Student.header')}
          </h2>
          <p className="text-[#1D2939] text-sm mb-4">
            {t('Student.description')}
          </p>
          <button className="flex items-center justify-center gap-1 bg-black text-white rounded-[8px]  py-2 px-4">
            {t('Student.button')}
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
