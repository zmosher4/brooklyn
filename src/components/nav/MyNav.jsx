import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const MyNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto w-100 justify-content-around">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              BROOKLYN MONTGOMERY
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/maps">
              Mapping Portfolio
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MyNav;
