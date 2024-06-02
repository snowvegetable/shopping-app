import { Outlet } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <Container>
      <NavigationBar />
      <Outlet />
    </Container>
  );
}
