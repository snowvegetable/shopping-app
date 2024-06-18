import { Outlet, redirect } from 'react-router-dom';
import login from '../../api/login';
import NavigationBar from '../NavigationBar';

export async function loader() {
  const token = localStorage.getItem('token');

  if (!token || token === '') {
    return redirect('/public/login');
  }

  console.log('loader login');

  return {};
}

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData) as LoginFormData;

  try {
    await login(updates.account, updates.password);
    return redirect('/');
  } catch (e) {
    alert('帳號或密碼輸入錯誤');
    return redirect('/public/login');
  }
}

export default function AuthRouter() {
  const pathList: PathList = {
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

  return (
    <>
      <NavigationBar pathList={pathList} isLogin />
      <Outlet />
    </>
  );
}
