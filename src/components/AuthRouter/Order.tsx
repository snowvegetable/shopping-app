import { useLoaderData } from 'react-router-dom';
import getProductOrderList from '../../api/getProductOrderList';
import ProductOrderCard from './ProductOrderCard';
import getRecommendProductsList from '../../api/getRecommendProductsList';

export async function loader() {
  const productOrderList = await getProductOrderList();
  const productList = await getRecommendProductsList();
  return { productOrderList, productList };
}

export default function Order() {
  const { productOrderList, productList } = useLoaderData() as {
    productOrderList: ProductOrder[];
    productList: Product[];
  };

  return (
    <div className="flex flex-col items-center p-3 ">
      {productOrderList.map((productOrder) => {
        return (
          <ProductOrderCard
            key={productOrder.productOrderId}
            productOrder={productOrder}
            productList={productList}
            className="mb-3"
          />
        );
      })}
    </div>
  );
}
