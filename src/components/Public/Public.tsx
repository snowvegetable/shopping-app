import { Outlet, useLoaderData } from 'react-router-dom';
import NavigationBar from '../NavigationBar';
import checkIsLogin from '../../api/checkIsLogin';
import logout from '../../api/logout';

export async function loader() {
  const isLogin = await checkIsLogin();
  console.log(isLogin);

  if (!isLogin) {
    await logout();
  }

  return { isLogin };
}

export default function Public() {
  const { isLogin } = useLoaderData() as { isLogin: boolean };
  let pathList: PathList = {
    index: {
      name: '購物車網頁',
      href: '/public',
    },
    pathList: [
      { name: '首頁', href: '/public' },
      { name: '登入', href: '/public/login' },
      { name: '註冊', href: '/public/register' },
    ],
  };

  if (isLogin) {
    pathList = {
      index: {
        name: '購物車網頁',
        href: '/public',
      },
      pathList: [
        { name: '首頁', href: '/public' },
        { name: '喜好商品', href: '/authenticate/favorite' },
        { name: '結帳', href: '/authenticate/ShoppingCart' },
      ],
    };
  }

  return (
    <>
      <NavigationBar pathList={pathList} isLogin={isLogin} />
      <Outlet />
    </>
  );
}
