import { useState } from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TeacherCardProps {
  id: number;
  name: string;
  title: string;
  imageUrl?: string;
  studentsCount: number;
  rating: number;
  onCardClick?: (id: number) => void;
}

const TeacherCard = ({
  id,
  name,
  title,
  imageUrl,
  studentsCount,
  rating,
  onCardClick,
}: TeacherCardProps) => {
  const { t } = useTranslation('userProfile/user');
  const [imageError, setImageError] = useState(false);

  const generateAvatar = () => {
    const initials = name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
    return (
      <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-md text-3xl font-bold text-gray-600">
        {initials}
      </div>
    );
  };

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(id);
    } else {
      // Fallback behavior if no callback is provided
      window.location.href = `/instructors/${id}`;
    }
  };

  return (
    <div
      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="space-y-4">
        {imageUrl && !imageError ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-48 object-cover rounded-md"
            onError={() => setImageError(true)}
          />
        ) : (
          generateAvatar()
        )}

        {/* بيانات المدرس */}
        <div className="text-center space-y-1">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600">{title}</p>
        </div>

        {/* عدد الطلاب والتقييم */}
        <div className="flex justify-between items-center text-gray-600 text-sm px-2">
          <span>
            {studentsCount} {t('teachers.students')}
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" />
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
