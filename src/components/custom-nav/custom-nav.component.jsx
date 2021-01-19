import React,{useEffect,useState} from 'react'

import './custom-nav.styles.css'


import {Navbar,Nav,NavDropdown} from 'react-bootstrap';

function Navs() {
const [scroll,handleScroll]=useState(false);
    useEffect(() => {
     window.addEventListener("scroll",()=>{
         if(window.scrollY>100){
             handleScroll(true);
         }else{
             handleScroll(false);
         }
     })
        return () => {
            window.removeEventListener('scroll', () => {
                if (window.scrollY < 100) {
                  console.log('scrolled')
                  handleScroll(false);
                } else handleScroll(true);
              })
        }
    }, [])
    
    return (

        <div className={`nav ${scroll&&'nav_black'}`}>
            
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" style={{width:'100vw'}}>
    <Navbar.Brand href="/"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" className='logo'/> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="#Favorites">Favorites</Nav.Link>
        <Nav.Link href="#Watch later">Watch Later</Nav.Link>

        <Nav.Link href="#Horror">Horror</Nav.Link>
        <Nav.Link href="#Drama">Drama
</Nav.Link>
        <Nav.Link href="#Comedy">Comedy</Nav.Link>

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
        </div>
    )
}

export default Navs
