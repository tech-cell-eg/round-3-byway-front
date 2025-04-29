import NavLinks from '../NavLinks';
import { AppSidebar } from '../sideMenu/AppSidebar';
import CourseReviewResults from './CourseReviewResults';
import { ReviewList } from './ReviewLists';

const ReviewsCoursePage = () => {
  return (
    <>
      <NavLinks />
      <AppSidebar />
      <CourseReviewResults />
      <ReviewList />
    </>
  );
};

export default ReviewsCoursePage;
