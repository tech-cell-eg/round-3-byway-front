import HeroLeft from '@/components/Hero/HeroLeft';
import HeroRightImage from '@/components/Hero/HeroRightImage';
import StatisticsSection from './StatisticsSection';
import TopCategories from '@/components/TopCategories/TopCategories';

const HeroSection = () => {
  return (
    <>
      <main className="w-full lg:min-h-[600px] bg-surface-light-primary">
        <section
          className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-6 
          items-center 
          justify-items-center 
          responsive-primary-padding-x 
          responsive-primary-padding-y 
          h-full
        "
        >
          <div className="flex justify-center md:justify-start w-full">
            <HeroLeft />
          </div>

          <div className="flex justify-center md:justify-end w-full">
            <HeroRightImage />
          </div>
        </section>
        <StatisticsSection />
        <TopCategories />
      </main>
    </>
  );
};

export default HeroSection;
