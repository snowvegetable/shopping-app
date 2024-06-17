import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import getProduct from '../../api/getProduct';
import { redirect, useLoaderData } from 'react-router-dom';
import heartSvg from '../../asset/svg/heart.svg';
import shoppingCartSvg from '../../asset/svg/shopping-cart.svg';

export async function loader({ params }) {
  const product = await getProduct(params.productId);

  if (!product) {
    return redirect('/public');
  }

  return { product };
}

export default function Product() {
  const { product } = useLoaderData() as { product: Product };
  const { name, price, numberOfProducts, img, text }: Product = product;

  const [numberOfProduct, setNumberOfProduct] = useState(1);

  //新增商品數量
  const productIncrement = () => {
    setNumberOfProduct((prev) => (prev < 100 ? prev + 1 : 100));
  };

  //刪除商品數量
  const productDecrement = () => {
    setNumberOfProduct((prev) => (prev > 1 ? prev - 1 : 1));
  };

  //輸入商品數量
  const changeProductInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setNumberOfProduct(() => {
      if (newValue > 100) {
        return 100;
      }

      if (newValue < 1) {
        return 1;
      }

      return newValue;
    });
  };

  return (
    <div className="container border-5 rounded-lg py-6 flex justify-around mt-3">
      <div className="h-96 mr-5">
        <img className="h-full" src={img} alt={name} />
      </div>

      <div className="w-6/12 text-left flex flex-col justify-between">
        <div className="mb-4 text-3xl">商品名稱：{name}</div>
        <div className="mb-4 text-xl">{text}</div>
        <div className="bg-gray-100 rounded-md p-3  text-xl mb-36 ">
          <div className="mb-3">價格：${price}</div>
          <div>庫存：{numberOfProducts}</div>
        </div>

        <div className="mb-5 ">
          <div className="h-10 flex items-center">
            <span className="mr-5 text-xl align-middle">數量</span>
            <button
              className="w-10 h-full border-2 rounded-l-md"
              onClick={productDecrement}
            >
              -
            </button>
            <input
              className="text-center h-full border-y-2 outline-none"
              type="number"
              min={1}
              value={numberOfProduct}
              onChange={changeProductInput}
            />
            <button
              className="w-10 h-full border-2 rounded-r-md"
              onClick={productIncrement}
            >
              +
            </button>
          </div>
        </div>

        <div>
          <button className="px-16 py-3 border-2 mr-10 inline-block text-center">
            <img className="inline-block h-7 mr-2" src={heartSvg} />
            <span>喜愛</span>
          </button>
          <button className="px-16 py-3 border-2 mr-10 inline-block text-center">
            <img className="inline-block h-7 mr-2" src={shoppingCartSvg} />
            <span>加進購物車</span>
          </button>
        </div>
      </div>
    </div>
  );
}
