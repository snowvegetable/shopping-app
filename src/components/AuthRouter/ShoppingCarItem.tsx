import { useEffect, useState } from 'react';
import NumberInputBox from '../NumberInputBox';
import { Link, useNavigate } from 'react-router-dom';
import deleteProductToShoppingCart from '../../api/deleteProductToShoppingCart';

export default function ShoppingCarItem({
  productId,
  imgSrc,
  productName,
  productQuantity,
  unitPrice,
  numberOfProducts,
  className,
  setCheckProductItems,
  setOrderCost,
  isCheckAll,
  shoppingCartItemId,
}: {
  productId: string;
  imgSrc: string;
  productName: string;
  productQuantity: number;
  unitPrice: number;
  numberOfProducts: number;
  className: string;
  setCheckProductItems: React.Dispatch<
    React.SetStateAction<ShoppingCartItem[]>
  >;
  setOrderCost: React.Dispatch<React.SetStateAction<number>>;
  isCheckAll: boolean;
  shoppingCartItemId: string;
}) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState<number>(productQuantity); //該商品數量
  const [totalCost, setTotalCost] = useState<number>(
    productQuantity * unitPrice
  ); //該商品總價格
  const [isCheck, setCheck] = useState<boolean>(false); //該商品是否被選取

  const addCheckProductItems = () => {
    setCheckProductItems((prev) => {
      const newCheckProductItem: ShoppingCartItem = {
        shoppingCartItemId,
        productId,
        quantity,
      };
      const findShoppingCartItem = prev.find(
        (item) => item.shoppingCartItemId === shoppingCartItemId
      );

      if (findShoppingCartItem) {
        return prev;
      }

      return [...prev, newCheckProductItem];
    });
  };

  const deleteCheckProductItems = () => {
    setCheckProductItems((prev) => {
      return prev.filter((item) => {
        return item.shoppingCartItemId !== shoppingCartItemId;
      });
    });
  };

  const onProductItemCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheck = e.target.checked;
    setCheck(newCheck);

    if (newCheck) {
      setOrderCost((prev) => prev + totalCost);
      addCheckProductItems();
    } else {
      setOrderCost((prev) => prev - totalCost);
      deleteCheckProductItems();
    }
  };

  const onDeleteButtonClick = async () => {
    if (confirm('請確認是否刪除該商品')) {
      await deleteProductToShoppingCart(shoppingCartItemId);
      navigate('/authenticate/ShoppingCar');
    }
  };

  useEffect(() => {
    setCheck(isCheckAll);

    if (isCheckAll) {
      setOrderCost((prev) => prev + totalCost);
      if (isCheck) {
        setOrderCost((prev) => prev - totalCost);
      }
      addCheckProductItems();
    } else {
      setOrderCost(0);
      deleteCheckProductItems();
    }
  }, [isCheckAll]);

  useEffect(() => {
    const newTotalCost = quantity * unitPrice;
    setTotalCost(newTotalCost);

    if (isCheck) {
      setOrderCost((prev) => prev - totalCost + newTotalCost);

      deleteCheckProductItems();
      addCheckProductItems();
    }
  }, [isCheck, quantity, unitPrice]);

  return (
    <tr className={className}>
      <td>
        <input
          className="h-5 w-5"
          type="checkbox"
          checked={isCheck}
          onChange={onProductItemCheck}
        />
      </td>
      <td>
        <div className="h-52">
          <Link to={`/public/product/${productId}`}>
            <img className="h-full" src={imgSrc} alt="" />
          </Link>
        </div>
      </td>
      <td>{productName}</td>
      <td>${unitPrice}</td>
      <td>
        <NumberInputBox
          min={1}
          max={numberOfProducts}
          value={quantity}
          setValue={setQuantity}
        />
      </td>
      <td>${totalCost}</td>
      <td>
        <button
          className="bg-red-600 px-3 py-2 rounded-md"
          onClick={onDeleteButtonClick}
        >
          刪除
        </button>
      </td>
    </tr>
  );
}
