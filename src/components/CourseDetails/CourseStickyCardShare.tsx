import ShareIcons from './ShareIcons';
import CopyUrlButton from '../CommonComponents/CopyUrlButton';
import QRCodeButton from './QRCodeButton';

function CourseStickyCardShare() {
  return (
    <div className="flex flex-col gap-2 px-[22px]">
      <div className="flex justify-between items-center">
        <p className="">Share</p>
        <div className="flex justfiy-between itesm-center gap-5 lg:gap-2">
          <CopyUrlButton className="font-semibold text-sm " />
          <QRCodeButton />
        </div>
      </div>
      <ShareIcons />
    </div>
  );
}

export default CourseStickyCardShare;
