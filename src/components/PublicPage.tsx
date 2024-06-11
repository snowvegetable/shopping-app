import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const pathList: PathList = {
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

export default function PublicPage() {
  return (
    <>
      <NavigationBar pathList={pathList} />
      <Outlet />
    </>
  );
}
