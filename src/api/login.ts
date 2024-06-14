export default async function login(
  account: string,
  password: string
): Promise<LoginStatus> {
  return new Promise((resolve) => {
    const data: LoginStatus = {
      status: 'success',
      token: 'token',
      userData: {
        username: 'cat',
      },
    };

    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}
