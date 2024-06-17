import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function ProductCard({
  className,
  product,
}: {
  className: string;
  product: Product;
}) {
  const { id, name, price, numberOfProducts, img, text }: Product = product;
  return (
    <Card style={{ width: '18rem' }} className={className}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="h-20">{text}</Card.Text>
        <Card.Text className="h-5">庫存：{numberOfProducts}</Card.Text>
        <Card.Text className="h-5">${price}</Card.Text>
        <Link to={`/public/product/${id}`} className="btn btn-primary">
          購買
        </Link>
      </Card.Body>
    </Card>
  );
}
