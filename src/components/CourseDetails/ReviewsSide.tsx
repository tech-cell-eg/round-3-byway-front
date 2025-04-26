import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Icon from '../Icon';
import img from '../../assets/avatar.png';

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
}

const LearnerReviews = () => {
  const { t } = useTranslation('coursePage/reviews');
  const [visibleCount, setVisibleCount] = useState(3);

  const reviewsData: Review[] = (
    t('reviewsData', { returnObjects: true }) as Review[]
  ).map(review => ({
    ...review,
    avatar: img,
  }));

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="space-y-6">
        {reviewsData.slice(0, visibleCount).map(review => (
          <div
            key={review.id}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col gap-4"
          >
            <div className="flex gap-6 flex-wrap">
              {/* Learner Img and Name */}
              <div className="flex items-center gap-2 min-w-[80px]">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <h4 className="text-gray-900 font-bold text-center text-sm">
                  {review.name}
                </h4>
              </div>

              {/* Review Data and Comment */}
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2 text-gray-500 text-sm flex-wrap">
                  <Icon
                    name="star"
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                  <span className="text-gray-900 font-bold">
                    {review.rating}
                  </span>
                  <span className="text-gray-500">
                    {t('reviewedOn', { date: review.date })}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {review.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < reviewsData.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleViewMore}
            className="text-gray-900 border border-gray-900 px-4 py-2 rounded-xl hover:bg-blue-50 transition cursor-pointer"
          >
            {t('viewMore')}
          </button>
        </div>
      )}
    </div>
  );
};

export default LearnerReviews;
