import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Icon, { IconName } from '../Icon';
import { Link } from 'react-router';

interface CardCategoriesProps {
  id: number;
  name: IconName;
  title: string;
  description: string;
}
const CardCategories: React.FC<CardCategoriesProps> = ({
  name,
  title,
  description,
  id,
}) => {
  return (
    <Link to={`/courses/category/${id}`}>
      <Card className="mt-4 rounded-2xl  border-0 bg-surface-light-primary min-w-[200px] min-h-[180px] ">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-center gap-2 rounded-2xl">
              <div className="bg-surface-highlight p-2 sm:p-3 lg:p-4 rounded-circle w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] flex items-center justify-center">
                <Icon name={name} size={35} className="text-icon-accent" />
              </div>
            </div>
          </CardTitle>
          <CardDescription className="flex flex-col items-center justify-center gap-2 mt-2 text-center">
            <h3 className="text-content-primary text-base sm:text-lg lg:text-xl font-medium">
              {title}
            </h3>
            <p className="text-content-secondary text-xs sm:text-sm lg:text-base">
              {description}
            </p>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default CardCategories;
