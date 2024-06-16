import { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import getProduct from '../../api/getProduct';
import { redirect, useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  const product = await getProduct(params.productId);

  if (!product) {
    return redirect('/public');
  }

  return { product };
}

export default function Product() {
  const { product } = useLoaderData() as { product: Product };

  const [quantity, setQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState(quantity * product.price);

  useEffect(() => {
    setProductPrice(quantity * product.price);
  }, [quantity, product.price]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) =>
      prevQuantity < 100 ? prevQuantity + 1 : 100
    );
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (
      value === '' ||
      (Number(value) >= 0 && Number.isInteger(Number(value)))
    ) {
      if (Number(value) > 100) {
        setQuantity(100);
      } else {
        setQuantity(Number(value));
      }
    }
  };

  return (
    <Container className="mt-20 mb-5">
      <Row>
        <Col md={8} className="mb-5">
          <Card className="h-100">
            <Card.Body className="d-flex justify-content-center align-items-center">
              {/* <h2>produce_figure</h2> */}
              <img src={product.img} alt={product.name} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Form>
            <Form.Group controlId="ProductName" className="text-center mb-4">
              <Form.Label>商品名稱</Form.Label>
              <div>{product.name}</div>
            </Form.Group>

            <Form.Group controlId="Price" className="text-center mb-4">
              <Form.Label>價錢</Form.Label>
              <div>{productPrice}</div>
            </Form.Group>

            <Form.Group controlId="Quantity" className="text-center mb-4 px-12">
              <Form.Label>數量</Form.Label>
              <InputGroup>
                <Button
                  variant="outline-secondary"
                  onClick={handleDecrement}
                  className="quantity-button"
                >
                  -
                </Button>
                <FormControl
                  type="text"
                  value={quantity}
                  onChange={handleChange}
                  className="quantity-input text-center"
                />
                <Button
                  variant="outline-secondary"
                  onClick={handleIncrement}
                  className="quantity-button"
                >
                  +
                </Button>
              </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-4">
              新增
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
