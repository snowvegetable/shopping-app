import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Image,
  InputGroup,
  Button,
  FormControl,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// 商品数据
const productsData = [
  {
    productName: '商品1',
    price: 50.0,
    initialQuantity: 1,
    imageSrc: 'https://via.placeholder.com/150',
  },
  {
    productName: '商品2',
    price: 30.0,
    initialQuantity: 1,
    imageSrc: 'https://via.placeholder.com/150',
  },
  {
    productName: '商品3',
    price: 100.0,
    initialQuantity: 1,
    imageSrc: 'https://via.placeholder.com/150',
  },
  {
    productName: '商品4',
    price: 1000.0,
    initialQuantity: 1,
    imageSrc: 'https://via.placeholder.com/150',
  },
];

const QuantityInput: React.FC<{
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
}> = ({ initialQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity < 100 ? prevQuantity + 1 : 100;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity > 0 ? prevQuantity - 1 : 0;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const number = Number(value);
    if (!isNaN(number) && number >= 0) {
      if (number > 100) {
        setQuantity(100);
      } else {
        setQuantity(number);
      }
      onQuantityChange(number);
    }
  };

  return (
    <InputGroup className="quantity-input-group">
      <Button
        variant="outline-secondary"
        onClick={handleDecrement}
        className="quantity-button"
      >
        -
      </Button>
      <FormControl
        type="number"
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
  );
};

const ProductRow: React.FC<{
  product: any;
  onQuantityChange: (quantity: number) => void;
  onCheckChange: (checked: boolean) => void;
}> = ({ product, onQuantityChange, onCheckChange }) => {
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCheckChange(event.target.checked);
  };

  return (
    <Row className="align-items-center my-2">
      <Col xs={1}>
        <Form.Check type="checkbox" onChange={handleCheckChange} />
      </Col>
      <Col xs={2}>
        <Image src={product.imageSrc} thumbnail />
      </Col>
      <Col xs={3}>{product.productName}</Col>
      <Col xs={2}>${product.price.toFixed(2)}</Col>
      <Col xs={2} className="d-flex justify-content-center">
        <QuantityInput
          initialQuantity={product.initialQuantity}
          onQuantityChange={onQuantityChange}
        />
      </Col>
      <Col xs={2}>${(product.price * product.initialQuantity).toFixed(2)}</Col>
    </Row>
  );
};

const ShoppingCart: React.FC = () => {
  const [products, setProducts] = useState(
    productsData.map((product) => ({
      ...product,
      quantity: product.initialQuantity,
      checked: false,
    }))
  );

  const handleQuantityChange = (index: number) => (quantity: number) => {
    const newProducts = [...products];
    newProducts[index].quantity = quantity;
    setProducts(newProducts);
  };

  const handleCheckChange = (index: number) => (checked: boolean) => {
    const newProducts = [...products];
    newProducts[index].checked = checked;
    setProducts(newProducts);
  };

  const totalAmount = products
    .filter((product) => product.checked)
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2);

  return (
    <Container className="mt-4">
      <Row className="bg-light p-2 border-bottom">
        <Col xs={1}></Col>
        <Col xs={2}></Col>
        <Col xs={3}>商品名稱</Col>
        <Col xs={2}>單價</Col>
        <Col xs={2} className="text-center">
          數量
        </Col>
        <Col xs={2}>總價格</Col>
      </Row>
      {products.map((product, index) => (
        <ProductRow
          key={index}
          product={product}
          onQuantityChange={handleQuantityChange(index)}
          onCheckChange={handleCheckChange(index)}
        />
      ))}
      <Card className="fixed-bottom bg-light p-3 border-top">
        <Row className="justify-content-end">
          <Col xs={2}>
            <strong>總金額:</strong> ${totalAmount}
          </Col>
          <Col xs={2}>
            <Button variant="primary">結帳</Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ShoppingCart;
