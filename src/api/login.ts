const userList: LoginFormData[] = [
  {
    account: 'cat',
    password: '123',
  },
  {
    account: 'dog',
    password: '456',
  },
  {
    account: 'mouse',
    password: '789',
  },
];

export default async function login(
  account: string,
  password: string
): Promise<LoginStatus> {
  return new Promise((resolve, reject) => {
    const user = userList.find(
      (user) => user.account === account && user.password === password
    );

    if (!user) {
      reject({
        status: 'error',
      });
      return;
    }

    setTimeout(() => {
      resolve({
        status: 'success',
        token: 'token',
        userData: {
          username: user.account,
        },
      });
    }, 100);
  });
}
