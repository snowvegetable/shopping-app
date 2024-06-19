import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import favoriteSvg from '../asset/svg/favorite.svg';
import notFavoriteSvg from '../asset/svg/not-favorite.svg';
import { useState } from 'react';
import deleteFavoriteProduct from '../api/deleteFavoriteProduct';
import addFavoriteProduct from '../api/addFavoriteProduct';

export default function ProductCard({
  className = '',
  product,
  isFavoriteProduct,
}: {
  className?: string;
  product: Product;
  isFavoriteProduct?: boolean;
}) {
  const { id, name, price, numberOfProducts, img, text }: Product = product;
  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(
    isFavoriteProduct
  );

  const onFavoriteButtonClick = async () => {
    const newIsFavorite = !isFavorite;
    setIsFavorite(newIsFavorite);

    if (newIsFavorite) {
      await addFavoriteProduct(id);
    } else {
      await deleteFavoriteProduct(id);
    }

    console.log(isFavorite);
  };

  return (
    <Card style={{ width: '18rem' }} className={className}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="h-20">{text}</Card.Text>
        <Card.Text className="h-5">庫存：{numberOfProducts}</Card.Text>
        <Card.Text className="h-5">${price}</Card.Text>
        <div className="flex items-center justify-between">
          <Link to={`/public/product/${id}`} className="btn btn-primary">
            購買
          </Link>
          <button onClick={onFavoriteButtonClick}>
            <img
              className="inline-block h-7 mr-2"
              src={isFavorite ? favoriteSvg : notFavoriteSvg}
            />
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}
