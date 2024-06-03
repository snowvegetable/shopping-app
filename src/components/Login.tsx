// import Form from "react-bootstrap/Form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <Container className="d-flex vh-100 justify-content-center align-items-center">
      <Row className="justify-content-center w-100">
        <Col md={4}>
          <div
            className="card p-4 text-white"
            style={{ borderRadius: "8px", backgroundColor: "#1c1c1c" }}
          >
            <Form>
              <h2 className="text-center mb-4">登入</h2>
              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>使用者名稱 or 電子郵件</Form.Label>
                <Form.Control
                  type="text"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    width: "300px",
                    border: "1px solid black",
                  }}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label>密碼</Form.Label>
                <Form.Control
                  type="password"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    width: "300px",
                    border: "1px solid black",
                  }}
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-between mb-4">
                <a href="#" className="text-muted small">
                  忘記密碼
                </a>
                <a href="#" className="text-muted small">
                  註冊
                </a>
              </div>

              <Button variant="primary" type="submit" className="w-100">
                登入
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
