import Icon from '../Icon';

const RatingCounter = () => {
  const ratings = [
    { stars: 5, percent: 80 },
    { stars: 4, percent: 10 },
    { stars: 3, percent: 5 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 2 },
  ];

  const renderStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Icon
          key={i}
          name="star"
          size={18}
          className={
            i < count
              ? 'fill-yellow-400 stroke-yellow-400'
              : 'fill-gray-200 stroke-gray-300'
          }
        />
      );
    }
    return stars;
  };

  return (
    <div className="text-black">
      {/* Average Rating */}
      <div className="flex items-center gap-2 mb-4">
        <Icon
          name="star"
          size={24}
          className="fill-yellow-400 stroke-yellow-400"
        />
        <span className="text-2xl text-gray-900 font-bold">4.6</span>
        <span className="text-gray-700 font-bold text-sm">146,951 reviews</span>
      </div>

      {/* Rating Breakdown */}
      <div className="space-y-2">
        {ratings.map(rating => (
          <div key={rating.stars} className="flex items-center gap-2">
            <div className="flex">{renderStars(rating.stars)}</div>
            <span className="text-sm text-gray-600">{rating.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingCounter;
