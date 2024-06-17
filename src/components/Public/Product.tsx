import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import getProduct from '../../api/getProduct';
import { redirect, useLoaderData } from 'react-router-dom';
import heartSvg from '../../asset/svg/heart.svg';
import shoppingCartSvg from '../../asset/svg/shopping-cart.svg';
import NumberInputBox from '../NumberInputBox';

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
          <NumberInputBox
            min={1}
            max={numberOfProducts}
            value={numberOfProduct}
            setValue={setNumberOfProduct}
          />
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
