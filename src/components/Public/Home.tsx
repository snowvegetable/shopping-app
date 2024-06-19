import getRecommendProductsList from '../../api/getRecommendProductsList';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCard';
import checkIsLogin from '../../api/checkIsLogin';

export async function loader() {
  const productList = await getRecommendProductsList();
  const userDataJson = localStorage.getItem('userData');
  const isLogin = await checkIsLogin();
  let favoriteProductList: string[] | undefined = undefined;
  if (userDataJson) {
    const userData = JSON.parse(userDataJson) as User;
    favoriteProductList = userData.favoriteProductList;
  }

  return { productList, favoriteProductList, isLogin };
}

export default function Home() {
  const { productList, favoriteProductList, isLogin } = useLoaderData() as {
    productList: Product[];
    favoriteProductList: string[] | undefined;
    isLogin: boolean;
  };

  return (
    <div className="m-24">
      <div className="flex mb-5  flex-wrap">
        {productList.map((product: Product) => (
          <ProductCard
            key={product.id}
            className="mb-5 mr-10"
            product={product}
            isFavoriteProduct={
              isLogin && favoriteProductList?.includes(product.id)
            }
            // isFavoriteProduct={false}
          />
        ))}
      </div>
    </div>
  );
}
