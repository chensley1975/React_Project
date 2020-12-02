import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
         this.toggleNav = this.toggleNav.bind(this);
         this.state = {
             isNavOpen: false
         };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="row row-content align-items-center">
                        <div className="col-sm"></div>
                    </div>
                    <div className="col-3">
                        <a href="https://www.porchandgable.com" target="_blank">
                            <img className="img-thumbnail mr-2 ml-autoalign-self-center" src="/assets/images/logo.jpg" alt="Porch &amp; Gable Logo" />
                        </a>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md" className="mt-0">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" />Home
                                    </NavLink>
                                    <NavLink className="nav-link" to="/houses">
                                        <i className="fa fa-list fa-lg" />Houses
                                    </NavLink>
                                    <NavLink className="nav-link" to="/reviews">
                                        <i className="fa fa-list fa-lg" />Reviews
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to="/register">
                                        <i className="fa fa-book fa-lg" />Register
                                    </NavLink>
                                    <NavLink className="nav-link" to="/login">
                                        <i className="fa fa-sign-in fa-lg" />Login
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;