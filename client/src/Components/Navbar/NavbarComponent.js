import React from 'react';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Button variant="primary">PUBLIKUJ</Button>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              ZALOGUJ
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#action1">Opcja 1</Dropdown.Item>
              <Dropdown.Item href="#action2">Opcja 2</Dropdown.Item>
              <Dropdown.Item href="#action3">Opcja 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
