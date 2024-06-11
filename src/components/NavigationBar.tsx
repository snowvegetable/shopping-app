import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavigationBar({ pathList }: { pathList: PathList }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand>
        <Link to={pathList.index.href} className="nav-link">
          {pathList.index.name}
        </Link>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          {pathList.pathList.map((item) => (
            <Link to={item.href} key={item.href} className="nav-link">
              {item.name}
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
