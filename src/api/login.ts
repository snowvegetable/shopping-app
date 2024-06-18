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
): Promise<void> {
  return new Promise((resolve, reject) => {
    const user = userList.find(
      (user) => user.account === account && user.password === password
    );

    if (!user) {
      reject();
      return;
    }

    localStorage.setItem('token', 'token');

    let userDataJson = localStorage.getItem('userData');
    if (!userDataJson) {
      const userData: User = {
        username: 'cat',
        productList: [],
        favoriteProductList: [],
      };
      userDataJson = JSON.stringify(userData);
      localStorage.setItem('userData', userDataJson);
    }
    resolve();
  });
}
