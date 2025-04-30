import ShareIcons from './ShareIcons';
import CopyUrlButton from '../CommonComponents/CopyUrlButton';

function CourseStickyCardShare() {
  return (
    <div className="flex flex-col gap-2 px-[22px]">
      <div className="flex justify-between items-center">
        <p className="">Share</p>
        <CopyUrlButton className="font-semibold text-sm " />
      </div>
      <ShareIcons />
    </div>
  );
}

export default CourseStickyCardShare;
