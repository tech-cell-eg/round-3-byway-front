import { Button } from '../ui/button';
import ShareIcons from './ShareIcons';

function CourseStickyCardShare() {
  return (
    <div className="flex flex-col gap-2 px-[22px]">
      <div className="flex justify-between items-center">
        <p className="">Share</p>
        <Button className="group border font-semibold text-sm border-border-light rounded-small shadow-none hover:shadow-sm active:shadow-none cursor-pointer">
          Copy
        </Button>
      </div>

      <ShareIcons />
    </div>
  );
}

export default CourseStickyCardShare;
