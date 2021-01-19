import React from 'react';

import {Container } from './nav.styles';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'


const CustomNav=()=>{
    return <Container><Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
    <Navbar.Brand href="/">Logo Goes Here </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/tv-shows">Tv Shows</Nav.Link>
        <Nav.Link href="/movies">Movies</Nav.Link>
        <Nav.Link href="/latest">latest</Nav.Link>
        <Nav.Link href="/my-list">My List</Nav.Link>

      </Nav>
      <Nav>
      <NavDropdown title="Users" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">User 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">User 2</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
      </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    </Container>
}

export default CustomNav;