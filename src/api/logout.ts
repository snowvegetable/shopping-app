export default async function logout(): Promise<void> {
  return new Promise((resolve) => {
    localStorage.removeItem('token');
    resolve();
  });
}
