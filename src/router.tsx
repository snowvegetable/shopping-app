import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home, { loader as homeLoader } from './components/Public/Home';
import ErrorPage from './components/Error';
import Login from './components/Public/Login';
import Register, {
  action as registerAction,
} from './components/Public/Register';
import Public, { loader as publicLoader } from './components/Public/Public';
import Product, { loader as productLoader } from './components/Public/Product';
import ShoppingCart from './components/Public/ShoppingCart';
import AuthRouter, {
  loader as AuthRouterLoader,
  action as AuthRouterAction,
} from './components/AuthRouter/AuthRouter';

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
            loader: homeLoader,
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
            path: 'product/:productId',
            element: <Product />,
            loader: productLoader,
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
            path: 'shoppingcart',
            element: <ShoppingCart />,
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
