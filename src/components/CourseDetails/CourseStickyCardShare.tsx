import ShareIcons from './ShareIcons';
import CopyUrlButton from '../CommonComponents/CopyUrlButton';
import QRCodeButton from './QRCodeButton';

function CourseStickyCardShare() {
  return (
    <div className="flex flex-col gap-2 px-[22px]">
      <div className="flex justify-between items-center">
        <p className="">Share</p>
        <div className="flex justfiy-between items-center gap-1 md:gap-2 font-semibold text-sm">
          <CopyUrlButton className=" " />
          <QRCodeButton />
        </div>
      </div>
      <ShareIcons />
    </div>
  );
}

export default CourseStickyCardShare;
