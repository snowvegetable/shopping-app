export default async function login(): Promise<Login> {
  return new Promise((resolve, reject) => {
    const data: Login = {
      status: 'success',
      data: {
        username: 'cat',
      },
    };
    resolve(data);
  });
}
