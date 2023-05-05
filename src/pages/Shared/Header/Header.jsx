import { useContext } from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  NavLink,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <Navbar className="project-bg-color-two " collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <Link
            style={{ textDecoration: "none" }}
            className="main-font-family fs-1 fw-medium project-color-three"
            to="/"
          >
            Recipe & Riot
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-font-family fs-5 fw-medium">
            <Link
              style={{ textDecoration: "none" }}
              className={`project-color-three ms-3 ${
                location.pathname === "/" ? "active-route" : ""
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className={`project-color-three ms-3 ${
                location.pathname === "/blogs" ? "active-route" : ""
              }`}
              to="/blogs"
            >
              Blogs
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className={`project-color-three ms-3 ${
                location.pathname === "/about" ? "active-route" : ""
              }`}
              to="/about"
            >
              About
            </Link>
          </Nav>
          <Nav>
            {user && (
              <Nav.Link href="#pricing" className="ms-3">
                <Image
                  title={user.displayName}
                  style={{ height: "35px", width: "35px" }}
                  src={user.photoURL}
                  roundedCircle
                />
              </Nav.Link>
            )}

            {user ? (
              <div>
                <Button
                  className="text-font-family project-color-three project-bg-color-one border border-0 px-4 py-2 pt-1 ms-3 fw-semibold mt-2"
                  onClick={handleLogOut}
                  variant="secondary"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button
                  className="text-font-family project-color-three project-bg-color-one  border border-0 px-4 ms-3 fw-semibold"
                  variant="secondary"
                >
                  Login
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
