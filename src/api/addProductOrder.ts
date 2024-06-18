export default async function addProductOrder(
  productOrder: ProductOrder
): Promise<void> {
  return new Promise((resolve, reject) => {
    const userDataJson = localStorage.getItem('userData');

    if (!userDataJson) {
      reject();
      return;
    }

    const userData = JSON.parse(userDataJson) as User;
    const productOrderList = userData.productOrderList;
    productOrderList.push(productOrder);

    userData.productOrderList = Array.from<ProductOrder>(productOrderList);
    localStorage.setItem('userData', JSON.stringify(userData));
    resolve();
  });
}
