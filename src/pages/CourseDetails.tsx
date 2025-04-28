import InstructoInfo from '@/components/CourseDetails/InstructoInfo';
import InstructorDescription from '@/components/CourseDetails/InstructorDescription';
import LessonDataCourseDetail from '@/components/CourseDetails/LessonDataCourseDetail';
import image from '../assets/images/instructorImage/Ellipse 4.png';
import NavLinkCoursesDetail from '@/components/CourseDetails/NavLinkCoursesDetail';

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
      <div
        className=" bg-surface-light-primary grid grid-cols-12 md:grid-cols-12 responsive-primary-padding-x 
          responsive-primary-padding-y  "
      >
        <div className="col-span-12 md:col-span-8">
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
      </div>
    </>
  );
};

export default CourseDetails;
