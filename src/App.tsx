import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
