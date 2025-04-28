import { useState } from 'react';
import Icon from '../Icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: string;
}

const LearnerReviews = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const reviewsData: Review[] = [
    {
      id: 1,
      name: 'Mark Doe',
      date: '22nd March, 2024',
      rating: 5,
      comment:
        'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
    },
    {
      id: 2,
      name: 'Mark Doe',
      date: '22nd March, 2024',
      rating: 5,
      comment:
        'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
    },
    {
      id: 3,
      name: 'Mark Doe',
      date: '22nd March, 2024',
      rating: 5,
      comment:
        'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
    },
    {
      id: 4,
      name: 'Mark Doe',
      date: '22nd March, 2024',
      rating: 5,
      comment:
        'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
    },
    {
      id: 5,
      name: 'Jane Smith',
      date: '23rd March, 2024',
      rating: 4,
      comment:
        'Great course! Really enjoyed the practical examples. The instructor was clear and concise.',
    },
    {
      id: 6,
      name: 'Alice Johnson',
      date: '24th March, 2024',
      rating: 5,
      comment:
        'Amazing! This course helped me build a strong foundation in design.',
    },
  ];

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    return nameParts
      .map(part => part.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="space-y-6">
        {reviewsData.slice(0, visibleCount).map(review => (
          <div
            key={review.id}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col gap-4"
          >
            <div className="flex gap-10 flex-wrap">
              {/* Learner Img and Name */}
              <div className="flex gap-2 min-w-[80px]">
                <Avatar className="bg-red-200">
                  {/* If Photo Exists It will appear */}
                  {review.avatar ? (
                    <AvatarImage src={review.avatar} />
                  ) : (
                    // If Photo doesn't exist, two letters will appear
                    <AvatarFallback>{getInitials(review.name)}</AvatarFallback>
                  )}
                </Avatar>
                <h4 className="text-gray-900 font-bold text-center text-sm">
                  {review.name}
                </h4>
              </div>

              {/* Review Data and Comment */}
              <div className="flex flex-col gap-5 flex-1">
                <div className="flex items-center gap-4 text-gray-500 text-sm flex-wrap">
                  <Icon
                    name="star"
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                  <span className="text-gray-900 font-bold">
                    {review.rating}
                  </span>
                  <span className="text-gray-500">
                    Reviewed on {review.date}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {review.comment}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Button to load more reviews */}
        {visibleCount < reviewsData.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleViewMore}
              className="text-gray-900 border border-gray-900 px-4 py-2 rounded-xl hover:bg-blue-50 transition cursor-pointer"
            >
              View more Reviews
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnerReviews;
