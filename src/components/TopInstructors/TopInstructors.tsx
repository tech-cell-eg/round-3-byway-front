import { useTranslation } from 'react-i18next';
import { Iinstructor } from '@/types/types';
import { InstructorCard } from '../CommonComponents/InstructorCard';

interface ITranslatedInstructor {
  title: string;
  description: string;
  price: string;
  lecs: string;
  hours: string;
  rating: number;
  level: string;
  students: string;
  category: string;
  instructorName: string;
  instructorTitle: string;
  instructorImage?: string;
}

export default function TopInstructors() {
  const { t } = useTranslation('home/topInstructors');
  const instructors = t('instructors', { returnObjects: true }) as Record<
    string,
    ITranslatedInstructor
  >;
  const instructorEntries = Object.entries(instructors).slice(0, 5);

  return (
    <div className="responsive-primary-padding-x w-full responsive-secondary-padding-y">
      <div className="px-5 pb-5">
        <h3 className="font-bold text-2xl text-border-dark">
          {t('topInstructors')}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
        {instructorEntries.map(([key, instructor], index) => {
          const instructorData: Iinstructor = {
            id2: index + 1,
            name: instructor.title,
            description: 'Intro to AI',
            students: instructor.students,
            numOfStu: 100,
            sku: 'sku123',
            reviews_count: instructor.rating,
            reviews_average: 4.5,
            reviews: [],
            has_discount: false,
            discount: '',
            category: { id: 1, name: instructor.category },
            images: [{ image: instructor.instructorImage ?? '' }],
            instructorName: 'Sarah Johnson',
            instructorImage: instructor.instructorImage,
          };

          return <InstructorCard key={key} course={instructorData} />;
        })}
      </div>
    </div>
  );
}
