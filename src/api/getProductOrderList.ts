export default async function getProductOrderList(): Promise<ProductOrder[]> {
  return new Promise((resolve, reject) => {
    const userDataJson = localStorage.getItem('userData');

    if (!userDataJson) {
      reject();
      return;
    }

    const userData = JSON.parse(userDataJson) as User;
    const productOrderList = userData.productOrderList;

    resolve(productOrderList);
  });
}
