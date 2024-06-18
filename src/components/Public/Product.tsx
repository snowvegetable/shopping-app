import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import getProduct from '../../api/getProduct';
import { redirect, useLoaderData } from 'react-router-dom';
import favoriteSvg from '../../asset/svg/favorite.svg';
import notFavoriteSvg from '../../asset/svg/not-favorite.svg';
import shoppingCartSvg from '../../asset/svg/shopping-cart.svg';
import NumberInputBox from '../NumberInputBox';
import addFavoriteProduct from '../../api/addFavoriteProduct';
import deleteFavoriteProduct from '../../api/deleteFavoriteProduct';

export async function loader({ params }) {
  const product = await getProduct(params.productId);
  const userDataJson = localStorage.getItem('userData');
  let favoriteProductList = new Set();
  let productIsFavorite = false;

  if (userDataJson) {
    const userData = JSON.parse(userDataJson) as User;
    favoriteProductList = new Set(userData.favoriteProductList);

    productIsFavorite = favoriteProductList.has(params.productId);
  }

  if (!product) {
    return redirect('/public');
  }

  return { product, productIsFavorite };
}

export default function Product() {
  const { product, productIsFavorite } = useLoaderData() as {
    product: Product;
    productIsFavorite: boolean;
  };
  const { id, name, price, numberOfProducts, img, text }: Product = product;
  const [numberOfProduct, setNumberOfProduct] = useState(1);
  const [isFavorite, setIsFavorite] = useState(productIsFavorite);

  const handleFavorite = async () => {
    setIsFavorite(!isFavorite);

    const newIsFavorite = !isFavorite;

    if (newIsFavorite) {
      await addFavoriteProduct(id);
    } else {
      await deleteFavoriteProduct(id);
    }
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
          <NumberInputBox
            min={1}
            max={numberOfProducts}
            value={numberOfProduct}
            setValue={setNumberOfProduct}
          />
        </div>

        <div>
          <button
            className="px-16 py-3 border-2 mr-10 inline-block text-center"
            onClick={handleFavorite}
          >
            <img
              className="inline-block h-7 mr-2"
              src={isFavorite ? favoriteSvg : notFavoriteSvg}
            />
            <span>{!isFavorite ? '喜愛' : '取消喜愛'}</span>
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
