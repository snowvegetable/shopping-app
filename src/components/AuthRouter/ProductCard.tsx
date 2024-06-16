import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-router-dom';

import catImg from '../../asset/img/cat.jpg';

export default function ProductCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={catImg} />
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
