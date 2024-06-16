export default async function checkIsLogin(): Promise<boolean> {
  return new Promise((resolve) => {
    const isLogin = localStorage.getItem('token');
    
    if (isLogin) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
}
