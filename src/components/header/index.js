import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Navbar, Container, Icon } from 'rbx';
import LogoImage from '../../assets/images/logo.png';
import "../../styles/header.scss";
import SearchBox from "../search_box_component";
import { FaCrosshairs } from "react-icons/fa";
import { showModal } from "../../actions/modal";

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
                    <Navbar.Segment as="div" align="end">
                        <Navbar.Item onClick={() => this.props.showModal('ADDRESS_MODAL')}>
                            <Icon color="has-custom-black">
                                <FaCrosshairs />
                            </Icon>
                            <p>Endereço</p>
                        </Navbar.Item>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Navbar>
        </Container>
    </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({ showModal }, dispatch);

export default connect(null, mapDispatchToProps)(Header);
