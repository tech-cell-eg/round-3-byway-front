// import { Button } from '@/components/ui/button';
// import Certificate from '@/components/Certificate/Certificate';
import CourseCompletionCard from '@/components/Certificate/CourseCompletion/CourseCompletionCard';

const CertificateDemo = () => {
  // Example data
  const certificateData = {
    courseTitle: 'Advanced Web Development with React',
    instructorName: 'Dr. Ahmed Mohamed',
    studentName: 'Sarah Johnson',
    courseDuration: '12 weeks',
    certificateId: 'CERT-2023-78945',
    issueDate: new Date().toLocaleDateString(),
  };

  // Example courses with different completion statuses
  const courses = [
    {
      ...certificateData,
      completionDate: new Date().toLocaleDateString(),
      progress: 100,
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full">
        {courses.map((course, index) => (
          <CourseCompletionCard
            key={index}
            courseTitle={course.courseTitle}
            instructorName={course.instructorName}
            studentName={course.studentName}
            courseDuration={course.courseDuration}
            certificateId={course.certificateId}
            completionDate={
              course.completionDate || new Date().toLocaleDateString()
            }
            progress={course.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificateDemo;
