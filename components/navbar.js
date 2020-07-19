import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar
      bg="light"
      variant="light"
      className="mr-auto ml-auto"
      fixed="top"
      expand="md"
      style={{ fontWeight: "bold", maxWidth: "1500px"}}
    >
      <Navbar.Brand href="#"> Nguyễn Thu Thảo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Form className="ml-auto mr-auto" style={{ display: "flex", flexDirection: "row"}}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-md-2"
            style={{ marginRight:"1rem"}}
          />
          <Button className="ml-sm-2" variant="outline-dark">
            Search
          </Button>
        </Form>
        <Nav >
          <Nav.Link href="#" className="mr-auto ml-auto">
            Trang chủ
          </Nav.Link>
          <Nav.Link href="#" className="mr-auto ml-auto">
            Giới thiệu
          </Nav.Link>
          <Nav.Link href="#" className="mr-auto ml-auto">
            Blog
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
