import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import ErrorPage from './components/Error';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
