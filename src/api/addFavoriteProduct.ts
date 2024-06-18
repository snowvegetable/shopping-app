export default async function addFavoriteProduct(
  productId: string
): Promise<void> {
  return new Promise((resolve) => {
    let userDataJson: string | null = localStorage.getItem('userData');

    userDataJson = localStorage.getItem('userData') as string;
    const userData = JSON.parse(userDataJson) as User;
    const favoriteProductList = new Set(userData.favoriteProductList);
    favoriteProductList.add(productId);
    userData.favoriteProductList = Array.from<string>(favoriteProductList);
    localStorage.setItem('userData', JSON.stringify(userData));
    resolve();
  });
}
