import React from 'react';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <BootstrapNavbar bg="white" expand="lg" className="shadow-sm">
    <div className="container">
      <BootstrapNavbar.Brand as={Link} to="/">Chat</BootstrapNavbar.Brand>
    </div>
  </BootstrapNavbar>
);
export default Navbar;
