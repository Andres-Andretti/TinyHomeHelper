import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import * as actionType from '../constants/userConstants';
import HomeIcon from "@material-ui/icons/Home"
import "./CSS/Header.css"

const Header = () => {
  
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
  
    const logout = () => {
      dispatch({ type: actionType.LOGOUT });
  
      history.push('/login');
  
      setUser(null);
    };
  
    useEffect(() => {
      const token = user?.token;
  
      if (token) {
        const decodedToken = decode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
  
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">
        <p className="headerTitle"><HomeIcon/>TinyHomeHelper</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about-us">About Us</Nav.Link>
          <NavDropdown title="Community" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/communityforum">
              Community Forum
            </NavDropdown.Item>
            <NavDropdown.Item href="/photoGallery">Photo Gallery</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <NavDropdown title="Resources" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/TinyHomeChecklist">
              Getting Started Checklist
            </NavDropdown.Item>
            <NavDropdown.Item href="/educationalresources">
              Tiny Home Articles
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.youtube.com/user/livingbigtinyhouse">
              Youtube Channel
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav> 
      </Navbar.Collapse>
      <Nav> 
        {user?.result ? (
            <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
          ) : (
            <Button component={Link} to="/login" variant="contained" color="primary">Sign In</Button>
        )}
      </Nav>
    </Navbar>
  );
}

export default Header;
