import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import ErrorPage from './components/Error';
import Login from './components/Login';
import Register from './components/Register';
import PublicPage from './components/PublicPage';
import AuthRouter, {
  loader as AuthRouterLoader,
} from './components/AuthRouter';
import ProductForm from './components/Produce';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'public',
        element: <PublicPage />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'register',
            element: <Register />,
          },
        ],
      },
      {
        path: 'authenticate',
        element: <AuthRouter />,
        loader: AuthRouterLoader,
        children: [
          {
            index: true,
            element: <div>hello</div>,
          },
        ],
      },
    ],
  },
  {
    path: 'test',
    element: <ProductForm />,
  },
  {
    path: '/*',
    element: <Navigate to="/public" />,
  },
]);

export default router;
