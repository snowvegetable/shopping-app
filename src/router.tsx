import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Public/Home';
import ErrorPage from './components/Error';
import Login from './components/Public/Login';
import Register, {
  action as registerAction,
} from './components/Public/Register';
import Public, { loader as publicLoader } from './components/Public/Public';
import Produce from './components/Public/Produce';
import ShoppingCart from './components/AuthRouter/ShoppingCart';
import AuthRouter, {
  loader as AuthRouterLoader,
  action as AuthRouterAction,
} from './components/AuthRouter/AuthRouter';
import ProductCard from './components/Public/ProductCard';

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
        loader: publicLoader,
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
          {
            path: 'produce',
            element: <Produce />,
          },
          {
            path: 'shoppingcart',
            element: <ShoppingCart />,
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
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/public" />,
  },
]);

export default router;
