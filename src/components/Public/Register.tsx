import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { redirect, useFetcher } from 'react-router-dom';

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData) as RegisterFormData;

  if (updates.password !== updates.checkPassword) {
    alert('密碼與確認密碼不一致');
    return redirect('/public/register');
  }

  alert('註冊成功');
  return redirect('/public/login');
}

export default function Register() {
  const fetcher = useFetcher();

  return (
    <Container className="d-flex vh-100 justify-content-center my-12">
      <Row className="justify-content-center w-100">
        <Col md={5}>
          <div className="card p-4 text-black mb-4">
            <fetcher.Form method="post">
              <h2 className="text-center mb-4">註冊</h2>

              <Form.Group controlId="formName" className="mb-4">
                <Form.Label>姓名</Form.Label>
                <Form.Control
                  type="text"
                  style={{
                    color: 'black',
                    border: '1px solid black',
                  }}
                  name="name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formUserName" className="mb-4">
                <Form.Label>使用者帳號</Form.Label>
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

              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Label>電子郵件</Form.Label>
                <Form.Control
                  type="text"
                  style={{
                    color: 'black',
                    border: '1px solid black',
                  }}
                  name="email"
                  required
                />
              </Form.Group>

              <Row className="justify-content-center">
                <Col>
                  <Form.Group controlId="formPassword" className="mb-4">
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
                </Col>

                <Col>
                  <Form.Group controlId="formConfirmPassword" className="mb-4">
                    <Form.Label>確認密碼</Form.Label>
                    <Form.Control
                      type="password"
                      style={{
                        color: 'black',
                        border: '1px solid black',
                      }}
                      name="checkPassword"
                      required
                    />
                  </Form.Group>
                </Col>
                {/* <Form.Text id="passwordHelpBlock" muted className="p-4">
                  您的密碼長度必須為
                  8-20個字符，包含字母和數字，且不得包含空格、特殊字符或表情符號
                </Form.Text> */}
              </Row>

              <Button variant="primary" type="submit" className="w-100">
                註冊
              </Button>
            </fetcher.Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
