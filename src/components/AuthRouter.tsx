import { Outlet, redirect } from 'react-router-dom';
import login from '../api/login';

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

  const loginStatus = (await login(
    updates.account,
    updates.password
  )) as LoginStatus;

  if (!loginStatus || loginStatus.status === 'error') {
    return redirect('/');
  }

  localStorage.setItem('token', loginStatus.token);
  localStorage.setItem('userData', JSON.stringify(loginStatus.userData));

  console.log('action login');

  return {};
}

export default function AuthRouter() {
  return <Outlet />;
}
