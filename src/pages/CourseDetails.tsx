import InstructoInfo from '@/components/CourseDetails/InstructoInfo';
import InstructorDescription from '@/components/CourseDetails/InstructorDescription';
import LessonDataCourseDetail from '@/components/CourseDetails/LessonDataCourseDetail';
import image from '../assets/images/instructorImage/Ellipse 4.png';
import NavLinkCoursesDetail from '@/components/CourseDetails/NavLinkCoursesDetail';
import ReviewsSection from '@/components/CourseDetails/CourseReviewsSection';
import TestimonialSection from '@/components/Testimonial/TestimonialSection';
import CourseStickyCard from '@/components/CourseDetails/CourseStickyCard';
import CourseInfoPanel from '@/components/CourseDetails/CourseInfoPanel';

const instructorData = {
  id: 'instructor',
  name: 'Ronald Richards',
  title: 'UI/UX Designer',
  imageSrc: image,
  rating: 40.445,
  students: 500,
  courses: 15,
  description:
    'With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and user engaging user experiences.',
};

const instructorDescription = {
  id: 'instructorDescription',
  titleone: 'Course Description',
  descriptionone:
    'This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises. ',
  titletwo: 'Certification',
  descriptiontwo:
    'At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful completion of our courses, you will earn a prestigious certification that not only validates your expertise but also opens doors to new opportunities in your chosen field.',
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
// const CourseDetails = () => {
//   return (
//     <>
//       {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 min-h-[400dvh]"> */}
//       {/* <CourseOverviewSection /> */}
//       <div className="">
//         <div className="min-h-[400dvh] grid grid-cols-12 gap-10 py-[40px] responsive-primary-padding-x ">
//           <CourseInfoPanel />
//           <CourseStickyCard />
//         </div>
//       </div>
//       {/*
//       <div
//         className=" bg-surface-light-primary grid grid-cols-12 md:grid-cols-12 responsive-primary-padding-x
//           responsive-primary-padding-y  "
//       >
//         <div className="col-span-12 md:col-span-8">
//           <NavLinkCoursesDetail links={navLinks} />
//           <InstructorDescription
//             id={instructorDescription.id}
//             titleone={instructorDescription.titleone}
//             descriptionone={instructorDescription.descriptionone}
//             titletwo={instructorDescription.titletwo}
//             descriptiontwo={instructorDescription.descriptiontwo}
//           />
//           <InstructoInfo
//             id={instructorData.id}
//             name={instructorData.name}
//             title={instructorData.title}
//             image={instructorData.imageSrc}
//             description={instructorData.description}
//             rating={instructorData.rating}
//             students={instructorData.students}
//             courses={instructorData.courses}
//           />
//           <LessonDataCourseDetail />
//         </div>

//         <div className="col-span-12 md:col-span-4 mt-5 bg-gray-300 flex justify-center items-center">
//           <h1 className="text-2xl ">test</h1>
//         </div>
//       </div>

//       <div className="p-20">
//         <ReviewsSection />
//       </div>
//       <TestimonialSection /> */}
//     </>
//   );
// };

// export default CourseDetails;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// export default function CoursePage() {
//   return (
//     <div className="relative min-h-[500dvh]">
//       <div className="relative">
//         {/* Top Section with Light Blue Background */}
//         <div className="bg-blue-100 pb-10">
//           <div className="max-w-7xl mx-auto px-4">
//             {/* Breadcrumb and Title */}
//             <div className="py-6">
//               <p className="text-sm text-gray-500">
//                 Home &gt; Categories &gt; Introduction to User Experience Design
//               </p>
//               <h1 className="text-3xl font-bold mt-2">
//                 Introduction to User Experience Design
//               </h1>
//               <p className="text-gray-600 mt-4">
//                 This course is meticulously crafted to provide you with a
//                 foundational understanding...
//               </p>
//               {/* Add rating, hours, etc. here */}
//             </div>
//           </div>
//         </div>

//         {/* Main Content Section (White Background) */}
//         <div className="bg-white">
//           <div className="max-w-7xl mx-auto px-4 py-10 flex gap-8">
//             {/* Left Column (Content) */}
//             <div className="flex-1">
//               {/* Description */}
//               <div className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-4">
//                   Course Description
//                 </h2>
//                 <p className="text-gray-700">
//                   This interactive e-learning course will introduce you to UX
//                   design...
//                 </p>
//               </div>

//               {/* Other Sections: Instructor, Syllabus, Reviews */}
//             </div>

//             {/* Right Column (Sticky Card) */}
//             <div className="absolute top-20 end-10 h-full w-full max-w-sm bg-red-500">
//               <div className="sticky top-6">
//                 <div className="border rounded-lg p-6 shadow-md">
//                   {/* Card Content */}
//                   <img
//                     src="your-course-image-url.jpg"
//                     alt="Course Preview"
//                     className="rounded-md mb-4"
//                   />
//                   <div className="text-2xl font-bold mb-2">
//                     $49.5{' '}
//                     <span className="text-green-500 text-sm ml-2">50% Off</span>
//                   </div>
//                   <button className="w-full bg-black text-white py-2 rounded-md mb-2">
//                     Add To Cart
//                   </button>
//                   <button className="w-full border border-black py-2 rounded-md">
//                     Buy Now
//                   </button>

//                   {/* Share Buttons */}
//                   <div className="flex items-center gap-4 mt-4">
//                     {/* Your share icons here */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="text-black bg-yellow-500">
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
//           perferendis quasi inventore error eum laboriosam. Delectus at fugiat
//           provident ipsum eos nemo, nam, adipisci, qui magni veniam aliquam
//           perspiciatis sit?
//         </p>
//       </div>
//     </div>
//   );
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function CourseDetails() {
  return (
    <main className="bg-linear-to-b from-surface-light-secondary to-[15%] to-white from-[15%]">
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 responsive-primary-padding-y responsive-primary-padding-x">
        <div className="lg:col-span-8 flex flex-col gap-10">
          <CourseInfoPanel />

          <NavLinkCoursesDetail links={navLinks} />

          <InstructorDescription
            id={instructorDescription.id}
            titleone={instructorDescription.titleone}
            descriptionone={instructorDescription.descriptionone}
            titletwo={instructorDescription.titletwo}
            descriptiontwo={instructorDescription.descriptiontwo}
          />

          <InstructoInfo
            id={instructorData.id}
            name={instructorData.name}
            title={instructorData.title}
            image={instructorData.imageSrc}
            description={instructorData.description}
            rating={instructorData.rating}
            students={instructorData.students}
            courses={instructorData.courses}
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
  );
}

export default CourseDetails;
