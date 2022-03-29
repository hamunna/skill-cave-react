import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import useAuth from "../../../hooks/useAuth";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const userIcon = <FontAwesomeIcon icon={faUserCircle} />;
const search = <FontAwesomeIcon icon={faSearch} />;

const Header = () => {
    // const { user, logOut } = useAuth();

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            className="border-bottom"
            fixed="top"
        >
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Navbar.Brand as={Link} to="/" className="fw-bold h4">
                        <span className="text-primary">Skills</span>
                        <span className="">Cave</span>
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home#hero-section">
                            Home
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">
                            Best Places
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">
                            About
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#gallery">
                            Gallery
                        </Nav.Link>
                    </Nav>

                    <Nav className="ms-auto h4">
                       
                        {/* {!user?.email ? ( */}
                        <Nav.Link as={Link} to="/signIn">
                            {userIcon}
                        </Nav.Link>
                        {/* ) : ( */}
                        {/* //Show this part if a user Logged In */}
                        <NavDropdown
                            className="theme-secondary-text"
                            title={userIcon}
                            id="navbarScrollingDropdown"
                        >
                            <img
                                className="d-block mx-auto"
                                style={{
                                    width: "60px",
                                    borderRadius: "50%",
                                }}
                                // src={user?.photoURL}
                                alt=""
                            />

                            <p className="px-2">
                                Hello,{" "}
                                <span style={{ fontSize: "12px" }}>
                                    {/* {user?.displayName} */}
                                </span>
                            </p>

                            <button
                                className="btn w-100 p-0 bg-warning"
                                // onClick={logOut}
                            >
                                <NavDropdown.Item>LogOut</NavDropdown.Item>
                            </button>
                        </NavDropdown>
                        {/* )} */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
