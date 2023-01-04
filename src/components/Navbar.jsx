import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default function Navegacion() {
    const setActiveClass = ({ isActive  }) => (isActive  ? "activo" : 'inactivo');
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/home" ><img className='imagenNav' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/800px-Pok%C3%A9_Ball_icon.svg.png" alt=""></img></Navbar.Brand>       
            <div className='d-flex justify-content-end nav deco'>
                <Nav className="me-auto">
                    <NavLink to="/" className={ (setActiveClass) } ><p className='me-3 fs-3 text'>Home</p></NavLink>
                    <NavLink to="/pokemones" className={ setActiveClass } ><p className='fs-3 text'>Pokemones</p></NavLink>
                </Nav>
            </div>
        </Container>
      </Navbar>
    </div>
  )
}
