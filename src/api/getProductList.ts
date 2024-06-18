export default async function getShoppingCartItemList(): Promise<
  ShoppingCartItem[]
> {
  return new Promise((resolve, reject) => {
    const userDataJson = localStorage.getItem('userData');

    if (userDataJson) {
      const userData = JSON.parse(userDataJson) as User;
      resolve(userData.productList);
      return;
    }

    reject();
  });
}
