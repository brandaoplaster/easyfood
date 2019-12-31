import React from 'react';
import { Navbar, Container } from 'rbx';
import LogoImage from '../../assets/images/logo.png';
import "../../styles/header.scss";
import SearchBox from "../search_box_component";

const Header = () => (
    <div className="top-navbar">
        <Container>
            <Navbar>
                <Navbar.Brand>
                    <img src={LogoImage}/>
                </Navbar.Brand>

                <Navbar.Menu>
                    <Navbar.Segment as="div" class="navbar-item navbar-center">
                        <SearchBox />
                    </Navbar.Segment>
                </Navbar.Menu>
            </Navbar>
        </Container>
    </div>
);

export default Header;
