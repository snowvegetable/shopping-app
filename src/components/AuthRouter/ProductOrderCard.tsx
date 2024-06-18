export default function ProductOrderCard({
  productOrder,
  productList,
  className,
}: {
  productOrder: ProductOrder;
  productList: Product[];
  className?: string;
}) {
  const shoppingCartItemList = productOrder.shoppingCartItemList;

  return (
    <div
      className={`flex flex-col bg-gray-200 h-full w-1/2 py-7 px-7 rounded-lg ${className}`}
    >
      <div className="flex flex-col">
        {shoppingCartItemList.map((item) => {
          const product = productList.find(
            (product) => product.id === item.productId
          );

          return (
            <div className="" key={product?.id}>
              <div className="h-36 inline-block mr-5">
                <img className="h-full" src={product?.img} alt="" />
              </div>
              <div className="h-36 inline-block">
                <div>商品編號：{item.shoppingCartItemId.substring(0, 10)}</div>
                <div>商品名稱：{product?.name}</div>
                <div>商品數量：{item.quantity}</div>
                <div>
                  商品價格：{(product?.price as number) * item.quantity}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-right text-xl">
        總價格：${productOrder.totalPrice}
      </div>
    </div>
  );
}
