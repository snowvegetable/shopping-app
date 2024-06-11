export default async function login(): Promise<Login> {
  return new Promise((resolve) => {
    const data: Login = {
      status: 'success',
      data: {
        username: 'cat',
      },
    };
    resolve(data);
  });
}
