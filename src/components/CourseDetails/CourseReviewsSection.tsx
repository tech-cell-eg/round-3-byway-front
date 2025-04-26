import { useTranslation } from 'react-i18next';
import RatingCounter from './RatingsSideCounter';
import LearnerReviews from './ReviewsSide';

const ReviewsSection = () => {
  const { t } = useTranslation('coursePage/reviews');
  return (
    <>
      <h1 className="font-medium text-content-primary text-body-large mb-10">
        {t('header')}
      </h1>

      <div className="flex flex-wrap justify-between gap-5">
        <RatingCounter />
        <LearnerReviews />
      </div>
    </>
  );
};

export default ReviewsSection;
