import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Public/Home';
import ErrorPage from './components/Error';
import Login from './components/Public/Login';
import Register, { action as registerAction } from './components/Public/Register';
import Public from './components/AuthRouter/Public';
import AuthRouter, {
  loader as AuthRouterLoader,
  action as AuthRouterAction,
} from './components/AuthRouter/AuthRouter';
import Test from './components/Test';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/public" />,
      },
      {
        path: 'public',
        element: <Public />,
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
            action: registerAction,
          },
        ],
      },
      {
        path: 'authenticate',
        element: <AuthRouter />,
        loader: AuthRouterLoader,
        action: AuthRouterAction,
        children: [
          {
            index: true,
            element: <div>hello</div>,
          },
          {
            path: 'test',
            element: <div>test</div>,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/public" />,
  },
  {
    path: 'test',
    element: <Test />,
  },
]);

export default router;
