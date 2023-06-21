import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";

function WebsiteHeader() {
  const navigate = useNavigate();
  return (
    <Navbar
      // fixed="top"
      expand={"sm"}
      className=" py-3"
      style={{ backgroundColor: "#00274C" }}
    >
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "#FFFFFF" }}>
          Nestwor<span style={{ color: "#FF7F50" }}>X</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"sm"}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${"sm"}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${"sm"}`}
          placement="end"
          style={{ backgroundColor: "#00274C", width: "80%" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-${"sm"}`}
              style={{ color: "#FFFFFF" }}
            >
              Nestwor<span style={{ color: "#FF7F50" }}>X</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1">
              <Nav.Link
                href="#action1"
                className="mx-4"
                style={{ color: "#FFFFFF", fontSize: 14 }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="mx-4"
                style={{ color: "#FFFFFF", fontSize: 14 }}
              >
                Explore
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="mx-4"
                style={{ color: "#FFFFFF", fontSize: 14 }}
              >
                Why Us?
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="mx-4"
                style={{ color: "#FFFFFF", fontSize: 14 }}
              >
                Featured Properties
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="mx-4"
                style={{ color: "#FFFFFF", fontSize: 14 }}
              >
                Testimonials
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="mx-4"
                style={{ color: "#FFFFFF", fontSize: 14 }}
              >
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button
                variant="outline"
                className="mx-3"
                style={{ color: "#FFFFFF" }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
              <Button
                variant="outline"
                style={{ color: "#FFFFFF", border: "1px solid #FFFFFF" }}
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
