import reactImg from '../asset/img/react.png';
import catImg from '../asset/img/cat.jpg';
import { Link } from 'react-router-dom';

export default function Test({ pathList }: { pathList: PathList }) {
  return (
    <header className="bg-gray-800 h-16 flex text-gray-300 px-5">
      <Link to={pathList.index.href} className="mr-5">
        <img className="h-full" src={reactImg} alt={pathList.index.name} />
      </Link>

      <nav className="flex items-center">
        {pathList.pathList.map((item) => (
          <Link
            className="hover:bg-black mx-1 px-5 py-2 rounded-lg text-gray-100 no-underline"
            to={item.href}
          >
            {item.name}
          </Link>
        ))}
        {/* <Link
          className="hover:bg-black mx-1 px-5 py-2 rounded-lg text-gray-100 no-underline"
          to="/public/"
        >
          首頁
        </Link>
        <Link
          className="hover:bg-black mx-1 px-5 py-2 rounded-lg text-gray-100 no-underline"
          to="/public/login"
        >
          登入
        </Link>
        <Link
          className="hover:bg-black mx-1 px-5 py-2 rounded-lg text-gray-100 no-underline"
          to="/public/register"
        >
          註冊
        </Link> */}
      </nav>

      <div className="group relrelative ml-auto flex items-center">
        <img className="h-14 rounded-full" src={catImg} alt="" />
        <div
          className="absolute bg-white text-gray-700 text-sm top-14 w-48 right-0 
                    ring-1 ring-black ring-opacity-0 rounded-md py-2 scale-0 group-hover:scale-100 
                    duration-300 origin-top-right"
        >
          <Link
            className="flex px-4 py-2 hover:bg-gray-100 text-black no-underline"
            to="#"
          >
            個人資料
          </Link>
          <Link
            className="flex px-4 py-2 hover:bg-gray-100 text-black no-underline"
            to="#"
          >
            設定
          </Link>
          <Link
            className="flex px-4 py-2 hover:bg-gray-100 text-black no-underline"
            to="#"
          >
            登出
          </Link>
        </div>
      </div>
    </header>
  );
}
