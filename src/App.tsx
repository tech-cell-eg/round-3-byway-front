import { createBrowserRouter, RouterProvider } from 'react-router';
import { Layout } from './pages/Layout';
import { queryClient } from './api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { SignUp } from './pages/SignUp';
import ProtAuth from './components/Auth/ProtAuth';
import { InstructorSignUp } from './pages/InstructorSignUp';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Login from './components/Login/Login';
import CategoryPage from './components/CategoryPage/CategoryPage';
import Home from './pages/Home';
//import { SignUp } from './pages/SignUp';
import { CartPage } from './pages/CartPage';
import InstructorPage from './components/InstructorPage/Instructor';
import CourseDetails from './pages/CourseDetails';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import ProfilePage from './pages/ProfilePage';
import DashboardLayout from './components/Dashboard/DashboardLayout';

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

          { path: 'login', element: <Login /> },
          { path: 'allCourses', element: <CategoryPage /> },

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
          { path: 'category', element: <CategoryPage /> },
          {
            path: 'cart',
            element: <CartPage />,
          },
          {
            path: 'instructor',
            element: <InstructorPage />,
          },
          {
            path: 'profilepage',
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <h1>Dashboard</h1>,
          },
        ],
      },
    ]
    // { basename: "/round-3-byway-front" }
  );

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
