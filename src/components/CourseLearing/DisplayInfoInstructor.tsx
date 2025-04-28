import InstructoInfo from '../CourseDetails/InstructoInfo';
import InstructorDescription from '../CourseDetails/InstructorDescription';
import LessonDataCourseDetail from '../CourseDetails/LessonDataCourseDetail';
import NavLinkCoursesDetail from '../CourseDetails/NavLinkCoursesDetail';
import image from '../../assets/images/instructorImage/Ellipse 4.png';

const DisplayInfoInstructor = () => {
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
      <div>
        <NavLinkCoursesDetail links={navLinks} />
        <InstructorDescription {...instructorDescription} />
        <InstructoInfo {...instructorData} />
        <LessonDataCourseDetail />
      </div>
    </>
  );
};

export default DisplayInfoInstructor;
