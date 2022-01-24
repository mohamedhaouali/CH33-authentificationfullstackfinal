import React from 'react'
import { Button, Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'

import { Switch, Route, Link } from 'react-router-dom'

import Logo from '../../assets/logo.png'

import { logout } from '../../JS/Actions/user'

import './NavBar.css'

const NavBar = () => {

    const isAuth = useSelector(state => state.userReducer.isAuth)

    const dispatch = useDispatch();

    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Link to='/'>
                    <img src={Logo} alt="logo" style={{ width: "50px" }} />
                </Link>

                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        { /* condition si utilisateur est connecte il affiche profile sinon il affiche rien  */}
                        {isAuth ?
                            <>
                                <Link to="/profile">
                                    <Button variant='outline-secondary' style={{ marginRight: "10px" }}>Profile</Button>
                                </Link>

                                <Link to="/login">

                                    <Button variant='success'
                                        onClick={() => dispatch(logout())}
                                        style={{ marginRight: "10px" }}>Logout</Button>

                                </Link>
                            </>

                            :

                            <>
                                <Link to='/register'>
                                    <Button variant='success' style={{ marginRight: "10px" }}>Register</Button>
                                </Link>
                                <Link to='/login'>
                                    <Button variant='secondary' style={{ marginRight: "10px" }}>Login</Button>
                                </Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar

