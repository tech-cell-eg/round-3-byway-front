import { createBrowserRouter, RouterProvider } from 'react-router';
import { Layout } from './pages/Layout';
import { queryClient } from './api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '',
        element: <Layout />,
        children: [{ index: true, element: <Home /> }],
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
