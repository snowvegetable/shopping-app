import ProductCard from './ProductCard';
import getRecommendProductsList from '../../api/getRecommendProductsList';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const productList = await getRecommendProductsList();
  return { productList };
}

export default function Home() {
  const { productList } = useLoaderData() as { productList: Product[] };

  return (
    <div className="m-24">
      <div className="flex mb-5 justify-between flex-wrap">
        {productList.map((product) => (
          <ProductCard
            className="mb-5"
            imgSrc={product.img}
            title={product.name}
            text={product.text}
            productId={product.id}
          />
        ))}
      </div>
    </div>
  );
}
