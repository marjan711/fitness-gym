import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../../images/logo-white.png"
import useAuth from '../../hooks/useAuth';




const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <div>
            <Navbar className="pt-1 pb-1" collapseOnSelect expand="lg md"  bg="dark" sticky="top" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="/home">
                <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle />

                <NavbarCollapse className=" justify-content-end">
                <Nav className="me-lg-5 ">
                    <Nav.Link className="fw-bold " as={Link} to="/home"><li className="c-li">Home</li></Nav.Link>
                    <Nav.Link className="fw-bold " as={Link} to="/services"><li className="c-li">Services</li></Nav.Link>
                    <Nav.Link className="fw-bold " as={Link} to="/shop"><li className="c-li">Shop</li></Nav.Link>
                    <Nav.Link className="fw-bold " as={Link} to="/blog"><li className="c-li">Blog</li ></Nav.Link>
                    
                   
                </Nav>
                    
                <Nav className="ms-lg-5">
                     <Navbar.Text className="mt-2">
                        <a href="#login">{user?.displayName }</a>
                    </Navbar.Text>
                    
                    {
                        user?.email?<Nav.Link  as={Link} to="/login"><button onClick={logOut} className="btn c-btn">LogOut</button></Nav.Link>:
                        <Nav.Link  as={Link} to="/login"><button className="btn c-btn">Login</button></Nav.Link>
                        
                    }
                   
                </Nav>
                </NavbarCollapse>
                

                
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;