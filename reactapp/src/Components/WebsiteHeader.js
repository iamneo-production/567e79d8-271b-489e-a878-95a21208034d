import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import Logo from "../../src/assets/Logo.svg";

function WebsiteHeader() {
  const navigate = useNavigate();
  return (
    <Navbar
      sticky="top"
      expand={"md"}
      className=" py-3"
      style={{ backgroundColor: "#E8E8E8" }}
    >
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "#FFFFFF" }}>
          <img src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${"md"}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
          placement="end"
          style={{ backgroundColor: "#E8E8E8", width: "70%" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
              <img src={Logo} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center align-items-center flex-grow-1">
              <Nav.Link
                href="/"
                className="mx-3"
                style={{ color: "#202020", fontWeight: "600" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/#explore"
                className="mx-3"
                style={{ color: "#202020", fontWeight: "600" }}
              >
                Explore
              </Nav.Link>
              <Nav.Link
                href="/#whyus"
                className="mx-3"
                style={{ color: "#202020", fontWeight: "600" }}
              >
                Why Us?
              </Nav.Link>
              <Nav.Link
                href="/#properties"
                className="mx-3"
                style={{ color: "#202020", fontWeight: "600" }}
              >
                Properties
              </Nav.Link>
              <Nav.Link
                href="/#testimonial"
                className="mx-3"
                style={{ color: "#202020", fontWeight: "600" }}
              >
                Testimonials
              </Nav.Link>
              <Nav.Link
                href="/#contact"
                className="mx-3"
                style={{ color: "#202020", fontWeight: "600" }}
              >
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex mx-3">
              <Button
                variant="link"
                style={{ color: "#202020", fontWeight: "600" }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
              <Button
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#202020",
                  borderColor: "#202020",
                }}
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default WebsiteHeader;
