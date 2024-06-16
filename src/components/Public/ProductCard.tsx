import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function ProductCard({
  imgSrc,
  title,
  text,
  productId,
  className,
}: {
  imgSrc: string;
  title: string;
  text: string;
  productId: string;
  className?: string;
}) {
  return (
    <Card style={{ width: '18rem' }} className={className}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="h-20">{text}</Card.Text>
        <Link to={`/public/product/${productId}`} className="btn btn-primary">
          購買
        </Link>
      </Card.Body>
    </Card>
  );
}
