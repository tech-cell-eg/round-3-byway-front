import courseThumbnail from '../../assets/course-thumbnail.png';
import CourseStickyCardButtons from './CourseStickyCardButtons';
import CourseStickyCardImage from './CourseStickyCardImage';
import CourseStickyCardPrice from './CourseStickyCardPrice';
import CourseStickyCardShare from './CourseStickyCardShare';

function CourseStickyCard() {
  return (
    <article className="flex flex-col gap-6 w-full py-[24px] bg-surface-light-primary border-border-light rounded-medium shadow-primary overflow-hidden">
      <div className="flex flex-col gap-4 px-[22px]">
        <div className="hidden lg:block">
          <CourseStickyCardImage courseThumbnail={courseThumbnail} />
        </div>

        <CourseStickyCardPrice />

        <CourseStickyCardButtons />
      </div>

      <hr className="text-border-light" />

      <CourseStickyCardShare />
    </article>
  );
}

export default CourseStickyCard;
