import getShoppingCartItemList from '../../api/getProductList';
import { useLoaderData, useNavigate } from 'react-router-dom';
import getProduct from '../../api/getProduct';
import ShoppingCarItem from './ShoppingCarItem';
import { useEffect, useState } from 'react';
import { hashString } from '../../api/hashString';
import addProductOrder from '../../api/addProductOrder';
import deleteProductToShoppingCart from '../../api/deleteProductToShoppingCart';

export async function loader() {
  const shoppingCartItemList = await getShoppingCartItemList();
  const productList: Product[] = [];

  shoppingCartItemList.forEach(async (item) => {
    const product = (await getProduct(item.productId)) as Product;
    productList.push(product);
  });

  return { shoppingCartItemList, productList };
}

export default function ShoppingCar() {
  const { shoppingCartItemList, productList } = useLoaderData() as {
    shoppingCartItemList: ShoppingCartItem[];
    productList: Product[];
  };

  //選取的商品
  const [checkProductItems, setCheckProductItems] = useState<
    ShoppingCartItem[]
  >([]);
  const [isCheckAll, setIsCheckAll] = useState<boolean>(false); //是否全選
  const [orderCost, setOrderCost] = useState<number>(0); //訂單總價
  const navigate = useNavigate();

  const placeAnOrder = async () => {
    if (orderCost === 0) {
      alert('請選擇商品');
      return;
    }

    if (confirm('請確認是否要下訂')) {
      const productOrderId = await hashString(
        `${checkProductItems} ${new Date()}`
      );

      const productOrder: ProductOrder = {
        productOrderId,
        shoppingCartItemList: checkProductItems,
        totalPrice: orderCost,
      };

      await addProductOrder(productOrder);

      checkProductItems.forEach(async (ShoppingCartItem) => {
        await deleteProductToShoppingCart(ShoppingCartItem.shoppingCartItemId);
      });

      alert('下訂成功');
      navigate('/');
    }
  };

  useEffect(() => {
    console.log(checkProductItems);
  }, [checkProductItems]);

  return (
    <div>
      <table className="table-fixed w-full text-center overflow-y-auto">
        <thead className="text-2xl mb-3">
          <tr>
            <th></th>
            <th></th>
            <th>商品名稱</th>
            <th>單價</th>
            <th>數量</th>
            <th>總價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <ShoppingCarItem
              className="mb-20 border-b-2 border-gray-200 text-xl"
              key={index}
              productId={product.id}
              imgSrc={product.img}
              productName={product.name}
              productQuantity={shoppingCartItemList[index].quantity}
              unitPrice={product.price}
              numberOfProducts={product.numberOfProducts}
              setCheckProductItems={setCheckProductItems}
              setOrderCost={setOrderCost}
              isCheckAll={isCheckAll}
              shoppingCartItemId={
                shoppingCartItemList[index].shoppingCartItemId
              }
            />
          ))}
        </tbody>
      </table>
      <Footer
        orderCost={orderCost}
        setIsCheckAll={setIsCheckAll}
        placeAnOrder={placeAnOrder}
      />
    </div>
  );
}

function Footer({
  orderCost,
  setIsCheckAll,
  placeAnOrder,
}: {
  orderCost: number;
  setIsCheckAll: React.Dispatch<React.SetStateAction<boolean>>;
  placeAnOrder: () => void;
}) {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800  text-center p-4 text-white">
      <div className="container mx-auto flex justify-between  items-center">
        <div className="flex justify-center items-center">
          <span className="text-xl mr-2">全選</span>
          <input
            className="h-5 w-5"
            type="checkbox"
            onChange={() => setIsCheckAll((prev) => !prev)}
          />
        </div>
        <div className="flex justify-center items-center text-center">
          <span className="text-xl mr-3">總價格：${orderCost}</span>
          <button
            className="bg-blue-600 px-3 py-2 rounded-md"
            onClick={placeAnOrder}
          >
            結帳
          </button>
        </div>
      </div>
    </footer>
  );
}
