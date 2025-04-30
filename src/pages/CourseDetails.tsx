import InstructoInfo from '@/components/CourseDetails/InstructoInfo';
import InstructorDescription from '@/components/CourseDetails/InstructorDescription';
import LessonDataCourseDetail from '@/components/CourseDetails/LessonDataCourseDetail';
import image from '../assets/images/instructorImage/Ellipse 4.png';
import NavLinkCoursesDetail from '@/components/CourseDetails/NavLinkCoursesDetail';
import ReviewsSection from '@/components/CourseDetails/CourseReviewsSection';
import TestimonialSection from '@/components/Testimonial/TestimonialSection';
import CourseStickyCard from '@/components/CourseDetails/CourseStickyCard';
import CourseInfoPanel from '@/components/CourseDetails/CourseInfoPanel';
import MoreCourses from '@/components/CourseDetails/MoreCourses';
import CourseStickyCardPrice from '@/components/CourseDetails/CourseStickyCardPrice';
import CourseStickyCardButtons from '@/components/CourseDetails/CourseStickyCardButtons';

const CourseDetails = () => {
  const instructorData = {
    id: 'instructor',
    instructor: [
      {
        id: 'instructor',
        name: 'Ronald Richards',
        title: 'UI/UX Designer',
        image: image,
        rating: 40.445,
        students: 500,
        courses: 15,
        description:
          'With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and user engaging user experiences.',
      },
    ],
  };
  const instructorDescription = {
    id: 'instructorDescription',
    descriptions: [
      {
        title: 'Course Description',
        description:
          'This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises.',
      },
      {
        title: 'Certification',
        description:
          'At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful completion of our courses, you will earn a prestigious certification that not only validates your expertise but also opens doors to new opportunities in your chosen field.',
      },
    ],
  };
  const navLinks = [
    {
      label: 'Description',
      sectionId: 'instructorDescription',
      path: '#instructorDescription',
    },
    { label: 'Instructor', sectionId: 'instructor', path: '#instructor' },
    { label: 'Syllabus', sectionId: 'syllabus', path: '#syllabus' },
    { label: 'Reviews', sectionId: 'reviews', path: '#reviews' },
  ];

  return (
    <>
      <main className="bg-linear-to-b from-surface-light-secondary to-[15%] to-white from-[15%]">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 responsive-primary-padding-y responsive-primary-padding-x">
          <div className="lg:col-span-8 flex flex-col gap-10">
            <CourseInfoPanel />

            <div className="flex lg:hidden flex-col gap-5 mt-5">
              <CourseStickyCardPrice />
              <CourseStickyCardButtons />
            </div>

            <NavLinkCoursesDetail links={navLinks} />

            <InstructorDescription
              id={instructorData.id}
              descriptions={instructorDescription.descriptions}
            />

            <InstructoInfo
              id={instructorData.id}
              instructor={instructorData.instructor}
            />

            <LessonDataCourseDetail />
          </div>

          <div className="sticky top-24 h-[495px] lg:col-span-4">
            <CourseStickyCard />
          </div>
        </div>

        <div className="px-20">
          <ReviewsSection />
        </div>

        <TestimonialSection />
      </main>
      <MoreCourses />
    </>
  );
};

export default CourseDetails;
