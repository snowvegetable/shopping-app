import { Navigate, Outlet, useLoaderData } from 'react-router-dom';
import login from '../api/login';

export async function loader(): Promise<Login> {
  const require = await login();
  console.log(require);
  return require;
}

export default function AuthRouter() {
  const userData: Login = useLoaderData() as Login;

  if (!userData || userData.status === 'error') {
    return <Navigate to={'/public'} />;
  }

  return <Outlet />;
}
