import instructorImage from '../../assets/images/instructorImage/Ellipse 4.png';
import { Link } from 'react-router';
import Icon from '../Icon';
import CourseStickyCardImage from './CourseStickyCardImage';
import courseThumbnail from '../../assets/course-thumbnail.png';
import Breadcrumbs from './Breadcrumbs';

function CourseInfoPanel() {
  return (
    <section className="col-span-8 h-fit text-sm md:text-base">
      <div className="block lg:hidden">
        <CourseStickyCardImage courseThumbnail={courseThumbnail} />
      </div>
      <div className="hidden lg:flex lg:mb-5">
        <Breadcrumbs />
      </div>

      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="mt-5 lg:mt-0 font-bold text-2xl md:text-3xl lg:text-[2.5rem] text-content-primary">
            Introduction to User Experience Design
          </h2>
          <p className="text-content-dark">
            This course is meticulously crafted to provide you with a
            foundational understanding of the principles, methodologies, and
            tools that drive exceptional user experiences in the digital
            landscape.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-3 text-content-dark">
          <div className="flex items-center gap-3 md:gap-2 pe-3 border-e-0 md:border-e">
            <div className="flex items-center gap-1">
              <p className="text-icon-filled-star">4.6</p>
              {Array.from({ length: 5 }).map((_, index) => (
                <Icon
                  key={index}
                  name="star"
                  className="text-icon-filled-star fill-icon-filled-star"
                  size={19}
                />
              ))}
            </div>
            <p className="">(651651 rating)</p>
          </div>

          <p className="">22 Total Hours. 155 Lectures. All levels</p>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="w-[40px] h-[40px] rounded-circle">
            <img
              src={instructorImage}
              alt="Instructor image"
              className="w-full object-cover"
            />
          </div>

          <div className="">
            <p className="flex items-center gap-2">
              Created by
              <Link
                to="/"
                className="text-accent-secondary hover:text-accent-primary"
              >
                Ronal Richards
              </Link>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-content-dark">
          <Icon name="sun" />
          <p className="">English, Spanish, Italian, German</p>
        </div>
      </div>
    </section>
  );
}

export default CourseInfoPanel;
