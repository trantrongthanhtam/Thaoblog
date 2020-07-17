import {Navbar,Nav, Form, FormControl, Button} from 'react-bootstrap'

export default function NavBar(){
    return (<Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#"> Nguyễn Thu Thảo</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
        </Form>
    </Navbar>);
}