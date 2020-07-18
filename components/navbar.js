import {Navbar,Nav, Form, FormControl, Button} from 'react-bootstrap'

export default function NavBar(){
    return (<Navbar bg="info" variant="light" fixed="top" expand="md" style={{fontWeight:"bold"}}>
        <Navbar.Brand href="#"> Nguyễn Thu Thảo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Blog</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-dark">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>);
}