import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

type PathItem = {
  name: string;
  href: string;
};

//導覽列路徑
const pathList: PathItem[] = [
  { name: "首頁", href: "/" },
  { name: "註冊", href: "/register" },
  { name: "登入", href: "/login" },
];

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand>
        <Link to="/" className="nav-link">
          購物車網頁
        </Link>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {pathList.map((item) => (
            <Link to={item.href} key={item.href} className="nav-link">
              {item.name}
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
