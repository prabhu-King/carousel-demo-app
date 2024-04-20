import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './appHeader.css';
function AppHeader(){
    return(
        <>
           <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><h4 className="corp-heading">CORPORATE</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="link-nav">Home</Nav.Link>
            <Nav.Link href="#about" className="link-nav">About</Nav.Link>
            <Nav.Link href="#services" className="link-nav">Services</Nav.Link>
            <Nav.Link href="#works" className="link-nav">Works</Nav.Link>
            <Nav.Link href="#teams" className="link-nav">Teams</Nav.Link>
            <Nav.Link href="#testimonials" className="link-nav">Testimonials</Nav.Link>
            <Nav.Link href="#pricing" className="link-nav" >Pricing</Nav.Link>
            <Nav.Link href="#blog" className="link-nav">Blog</Nav.Link>
            <Nav.Link href="#contact" className="link-nav">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default AppHeader;