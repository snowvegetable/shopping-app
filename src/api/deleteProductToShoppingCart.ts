export default async function deleteProductToShoppingCart(
  shoppingCartItemId: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const userDataJson = localStorage.getItem('userData');

    if (!userDataJson) {
      reject();
      return;
    }

    const userData = JSON.parse(userDataJson) as User;
    const productList = userData.productList.filter((product) => {
      return product.shoppingCartItemId !== shoppingCartItemId;
    });
    userData.productList = Array.from<ShoppingCartItem>(productList);
    localStorage.setItem('userData', JSON.stringify(userData));
    resolve();
  });
}
