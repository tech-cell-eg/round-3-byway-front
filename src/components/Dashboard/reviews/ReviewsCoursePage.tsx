import { AppSidebar } from '../sideMenu/AppSidebar';
import CourseReviewResults from './CourseReviewResults';
import { ReviewList } from './ReviewLists';

const ReviewsCoursePage = () => {
  return (
    <>
      <AppSidebar />
      <CourseReviewResults />
      <ReviewList />
    </>
  );
};

export default ReviewsCoursePage;
