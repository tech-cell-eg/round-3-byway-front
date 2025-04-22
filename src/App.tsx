import { createBrowserRouter, RouterProvider } from 'react-router';
import { Layout } from './pages/Layout';
import Home from './pages/Home';
import { queryClient } from './api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { SignUp } from './pages/SignUp';
import ProtAuth from './components/Auth/ProtAuth';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '',
        element: <Layout />,
        children: [
          { index: true, element: <Home /> }, 
          {
            path: 'signup',
            element: (
              <ProtAuth>
                <SignUp />
              </ProtAuth>
            ),
          },
        ],
      },
    ]
    // { basename: "/round-3-byway-front" }
  );
  return (
    <QueryClientProvider client={queryClient}>
      <div></div>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
export default App;
