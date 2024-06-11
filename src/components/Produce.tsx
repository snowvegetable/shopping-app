import { useState } from 'react';
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

export default function ProductForm() {
  const [quantity, setQuantity] = useState(1);

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
        setQuantity(Number('100'));
      } else {
        setQuantity(Number(value));
      }
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // 在这里处理表单提交逻辑
  // };

  const buttonStyle = {
    borderRadius: '50% 0 0 50%', // 左按钮半圆
    marginRight: '-1px', // 防止边框重叠
  };

  const buttonEndStyle = {
    borderRadius: '0 50% 50% 0', // 右按钮半圆
    marginLeft: '-1px', // 防止边框重叠
  };

  const formControlStyle = {
    // borderRadius: '0', // 去除输入框的圆角
  };

  return (
    <Container className="mt-20 mb-5">
      <Row>
        <Col md={8} className="mb-5">
          <Card className="h-100">
            <Card.Body className="d-flex justify-content-center align-items-center">
              <h2>produce_figure</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Form>
            {/* <Form onSubmit={handleSubmit}> */}
            <Form.Group controlId="ProductName" className="text-center mb-4">
              <Form.Label>商品名稱</Form.Label>
              {/* <Form.Control required /> */}
              <div>produce</div>
            </Form.Group>

            <Form.Group controlId="Price" className="text-center mb-4">
              <Form.Label>價錢</Form.Label>
              {/* <Form.Control required /> */}
              <div>price</div>
            </Form.Group>

            <Form.Group controlId="Quantity" className="text-center mb-4">
              <Form.Label>數量</Form.Label>
              <InputGroup>
                <Button
                  variant="outline-secondary"
                  onClick={handleDecrement}
                  style={buttonStyle}
                >
                  -
                </Button>
                <FormControl
                  type="text"
                  value={quantity}
                  onChange={handleChange}
                  className="text-center"
                  style={formControlStyle}
                />
                <Button
                  variant="outline-secondary"
                  onClick={handleIncrement}
                  style={buttonEndStyle}
                >
                  +
                </Button>
              </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-4">
              add
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
