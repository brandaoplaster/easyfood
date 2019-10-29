import React from 'react';
import { Navbar, Container } from 'rbx';
import LogoImage from '../../assets/images/logo.png';

const Header = () => (
    <Navbar>
        <Container>
            <Navbar.Brand>
                <img src={LogoImage}/>
            </Navbar.Brand>
        </Container>
    </Navbar>
);

export default Header;