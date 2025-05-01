import { QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ReduxInitializer } from './Redux/reduxInitializer';
import { store } from './Redux/store';
import { queryClient } from './api/queryClient';
import ProtAuth from './components/Auth/ProtAuth';
import CategoryPage from './components/CategoryPage/CategoryPage';
import CoursesDash from './components/Dashboard/CoursesDash/CoursesDash';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import HomeDash from './components/Dashboard/HomeDash/HomeDash';
import Revenue from './components/Dashboard/Revenue/Revenue';
import { NotificationLayout } from './components/Dashboard/commuincation/notification/NotificationLayout';
import SectionLessons from './components/Dashboard/lesssons/SectionLessons';
import ReviewsCoursePage from './components/Dashboard/reviews/ReviewsCoursePage';
import CourseSections from './components/Dashboard/sections/CourseSections';
import { UserSettings } from './components/Dashboard/userSettings/UserSettings';
import InstructorPage from './components/InstructorPage/Instructor';
import Login from './components/Login/Login';
import PersonalInformation from './components/Profile/PersonalInformation';
import { CartPage } from './pages/CartPage';
import CertificateDemo from './pages/CertificateDemo';
import CourseDetails from './pages/CourseDetails';
import CourseLearingPage from './pages/CourseLearingPage';
import Home from './pages/Home';
import { InstructorSignUp } from './pages/InstructorSignUp';
import { Layout } from './pages/Layout';
import { SignUp } from './pages/SignUp';

function App() {
  const { i18n } = useTranslation();

  //direction of website at ar & en
  useEffect(() => {
    const currentLang = i18n.language;
    const dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', currentLang);
  }, [i18n.language]);
  const router = createBrowserRouter(
    [
      {
        path: '',
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'coursespage', element: <CourseDetails /> },
          { path: 'courselearingpage', element: <CourseLearingPage /> },

          { path: 'login', element: <Login /> },
          { path: 'allCourses', element: <CategoryPage /> },
          { path: 'personalInformation', element: <PersonalInformation /> },
          { path: 'certificate-demo', element: <CertificateDemo /> },

          {
            path: 'signup',
            element: (
              <ProtAuth>
                <SignUp />
              </ProtAuth>
            ),
          },
          {
            path: 'signup-instructor',
            element: <InstructorSignUp />,
          },
          {
            path: 'cart',
            element: <CartPage />,
          },
          {
            path: 'instructor',
            element: <InstructorPage />,
          },
        ],
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <HomeDash />,
          },
          {
            path: 'dashboardCourses',
            element: <CoursesDash />,
          },
          {
            path: 'revenue',
            element: <Revenue />,
          },
          {
            path: 'commuincation',
            element: <NotificationLayout />,
          },
          {
            path: 'reviews',
            element: <ReviewsCoursePage />,
          },
          {
            path: 'sections',
            element: <CourseSections />,
          },
          {
            path: 'lessons/:sectionId',
            element: <SectionLessons />,
          },
          {
            path: 'settings',
            element: <UserSettings />,
          },
          {
            path: 'lessons/:sectionId',
            element: <SectionLessons />,
          },
        ],
      },
    ],
    { basename: '/round-3-byway-front' }
  );

  return (
    <Provider store={store}>
      <ReduxInitializer />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
