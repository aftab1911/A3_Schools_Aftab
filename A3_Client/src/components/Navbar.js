import React from 'react';
import { Navbar, Nav, Button, FormControl, Form } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './NavbarStyles.css';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar1 = () => {

  return (
    <Navbar bg="white" expand="lg" className="nav-bar pos">
      <Navbar.Brand href="/">
        <img
          src="../logo-png.png"
          alt=""
          width="50"
          height="50"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="left">
          <Nav.Link href="/tutorials" className="dropdown-link">
            Tutorials <i className="fa fa-caret-down"></i>
          </Nav.Link>
          <Nav.Link href="/exercises" className="dropdown-link">
            Exercises <i className="fa fa-caret-down"></i>
          </Nav.Link>
          <Nav.Link href="/certified" className="dropdown-link">
            Get Certified <i className="fa fa-caret-down"></i>
          </Nav.Link>
          <Nav.Link href="/services" className="dropdown-link">
            Services <i className="fa fa-caret-down"></i>
          </Nav.Link>
        </Nav>
        
      </Navbar.Collapse>

        <Navbar.Collapse>
        <Form className="search-form">
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button class="my-2 my-sm-0" variant="outline-success"><i className="fa fa-search"></i></Button> */}
            <div class="input-group rounded">
                <FormControl type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <Button className="input-group-text border-0 btn btn-success" id="search-addon">
                    <i className="fas fa-search"></i>
                </Button>
            </div>
        </Form>
        </Navbar.Collapse>
        <div className="right">
          <div className="buttons">
            <Button className="me-1" variant="outline-secondary">Pro</Button>
            <Button className="me-1" variant="info">Get Started</Button>
            <Button className="me-1" variant="warning">Free Website</Button>
           
          <Button className="me-1" variant="dark">
        <a href="/login" style={{color:"white",textDecoration:"none"}}>Log In</a>
          </Button>
          </div>
        </div>
    </Navbar>
  );
};

export default Navbar1;
