import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar className="header"  expand="lg" sm='12'>
        <Container >
          <Navbar.Brand href="#">dight & foryou</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">meals</Nav.Link>
              <NavDropdown title="meals" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">breakfast</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  lunch
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Dinner
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Trining soon
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Breakfast meals..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
