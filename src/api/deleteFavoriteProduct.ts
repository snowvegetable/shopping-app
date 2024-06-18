export default async function deleteFavoriteProduct(
  productId: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const userDataJson = localStorage.getItem('userData');

    if (userDataJson) {
      const userData = JSON.parse(userDataJson) as User;
      const favoriteProductList = new Set(userData.favoriteProductList);
      favoriteProductList.delete(productId);
      userData.favoriteProductList = Array.from<string>(favoriteProductList);
      localStorage.setItem('userData', JSON.stringify(userData));

      resolve();
    } else {
      reject();
    }
  });
}
