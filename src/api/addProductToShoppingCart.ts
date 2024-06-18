export default async function addProductToShoppingCart(
  product: ShoppingCartItem
): Promise<void> {
  return new Promise((resolve, reject) => {
    const userDataJson = localStorage.getItem('userData');

    if (userDataJson) {
      const userData = JSON.parse(userDataJson) as User;
      const productList = new Set(userData.productList);
      productList.add(product);
      userData.productList = Array.from<ShoppingCartItem>(productList);
      localStorage.setItem('userData', JSON.stringify(userData));
      resolve();
      return;
    }

    reject();
  });
}
