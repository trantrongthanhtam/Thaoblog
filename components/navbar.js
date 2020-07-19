import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar
      bg="light"
      variant="light"
      className="mr-auto ml-auto"
      fixed="top"
      expand="md"
      style={{ fontWeight: "bold", maxWidth: "1500px" }}
    >
      <Navbar.Brand href="#"> Nguyễn Thu Thảo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" className="mr-auto ml-auto">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="mr-auto ml-auto">
            About
          </Nav.Link>
          <Nav.Link href="#" className="mr-auto ml-auto">
            Blog
          </Nav.Link>
        </Nav>
        <Form style={{ display: "flex", flexDirection: "row" }}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            style={{ marginRight: "1rem" }}
          />
          <Button className="ml-sm-2" variant="outline-dark">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
