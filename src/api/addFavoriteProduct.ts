export default async function addFavoriteProduct(
  productId: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const userDataJson = localStorage.getItem('userData');

    if (userDataJson) {
      const userData = JSON.parse(userDataJson) as User;
      const favoriteProductList = new Set(userData.favoriteProductList);
      favoriteProductList.add(productId);
      userData.favoriteProductList = Array.from<string>(favoriteProductList);
      localStorage.setItem('userData', JSON.stringify(userData));

      resolve();
    } else {
      reject();
    }
  });
}
