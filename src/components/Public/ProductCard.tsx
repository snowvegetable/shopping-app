import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-router-dom';

export default function ProductCard({
  imgSrc,
  title,
  text,
}: {
  imgSrc: string;
  title: string;
  text: string;
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Form>
          <Button variant="primary" type="submit">
            Go somewhere
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
