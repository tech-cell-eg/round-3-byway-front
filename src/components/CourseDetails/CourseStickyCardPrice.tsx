import Icon from '../Icon';
import { Button } from '../ui/button';

function CourseStickyCardPrice() {
  return (
    <div className="flex items-center justify-between font-bold">
      <div className="flex items-center gap-3">
        <p className="text-body-big text-content-primary">$49.5</p>
        <p className="text-body-medium text-gray-300 line-through">$99.5</p>
        <p className="text-body-large text-green-500">50% Off</p>
      </div>
      <Button className="group border border-border-light rounded-small shadow-none hover:shadow-sm active:shadow-none cursor-pointer duration-short">
        <Icon name="heart" className="group-hover:text-red-500" />
      </Button>
    </div>
  );
}

export default CourseStickyCardPrice;
