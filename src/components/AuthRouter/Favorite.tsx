import { redirect, useLoaderData } from 'react-router-dom';
import getRecommendProductsList from '../../api/getRecommendProductsList';
import ProductCard from '../ProductCard';

export async function loader() {
  const productList = await getRecommendProductsList();
  const userDataJson = localStorage.getItem('userData');

  if (!userDataJson) {
    return redirect('/');
  }

  const userData = (await JSON.parse(userDataJson)) as User;
  const favoriteProductList = userData.favoriteProductList;

  return { productList, favoriteProductList };
}

export default function Favorite() {
  const { productList, favoriteProductList } = useLoaderData() as {
    productList: Product[];
    favoriteProductList: string[];
  };

  return (
    <div className="m-24">
      <div className="flex mb-5  flex-wrap">
        {productList.map((product: Product) => {
          if (favoriteProductList.includes(product.id)) {
            return (
              <ProductCard
                key={product.id}
                className="mb-5 mr-10"
                product={product}
                isFavoriteProduct={true}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
