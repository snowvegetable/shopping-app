import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, Form as RouterForm } from 'react-router-dom';

export default function Login() {
  return (
    <Container className="d-flex vh-100 justify-content-center my-12">
      <Row className="justify-content-center w-100">
        <Col md={5}>
          <div className="card p-4 text-black mb-4">
            <RouterForm method="post" action="/authenticate">
              <h2 className="text-center mb-4">登入</h2>
              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>使用者名稱 or 電子郵件</Form.Label>
                <Form.Control
                  type="text"
                  style={{
                    color: 'black',
                    border: '1px solid black',
                  }}
                  name="account"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label>密碼</Form.Label>
                <Form.Control
                  type="password"
                  style={{
                    color: 'black',
                    border: '1px solid black',
                  }}
                  name="password"
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-between mb-4">
                <Link to="#" className="text-muted small">
                  忘記密碼
                </Link>
                <Link to="/public/register" className="text-muted small">
                  註冊
                </Link>
              </div>

              <Button variant="primary" type="submit" className="w-100">
                登入
              </Button>
            </RouterForm>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
