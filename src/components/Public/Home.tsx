import getRecommendProductsList from '../../api/getRecommendProductsList';
import { redirect, useLoaderData } from 'react-router-dom';
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

export default function Home() {
  const { productList, favoriteProductList } = useLoaderData() as {
    productList: Product[];
    favoriteProductList: string[];
  };

  return (
    <div className="m-24">
      <div className="flex mb-5  flex-wrap">
        {productList.map((product: Product) => (
          <ProductCard
            key={product.id}
            className="mb-5 mr-10"
            product={product}
            isFavoriteProduct={favoriteProductList.includes(product.id)}
          />
        ))}
      </div>
    </div>
  );
}
