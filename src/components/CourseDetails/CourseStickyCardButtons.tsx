import { Button } from '../ui/button';

function CourseStickyCardButtons() {
  return (
    <div className="flex flex-col gap-5">
      <Button className="py-5.5 text-surface-light-primary bg-surface-dark-primary hover:bg-accent-secondary active:bg-accent-primary focus:bg-accent-secondary rounded-small shadow-none hover:shadow-primary active:shadow-none cursor-pointer duration-short">
        Add To Cart
      </Button>
      <Button className="py-5.5 text-surface-dark-primary hover:text-surface-light-primary focus:text-surface-light-primary bg-surface-light-primary hover:bg-accent-secondary active:bg-accent-primary focus:bg-accent-secondary border border-border-light rounded-small shadow-none hover:shadow-primary active:shadow-none cursor-pointer duration-short">
        Buy Now
      </Button>
    </div>
  );
}

export default CourseStickyCardButtons;
