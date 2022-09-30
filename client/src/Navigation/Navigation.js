import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Rakib from '../Rakib/Rakib';
import Shahrier from '../Shahrier/Shahrier';
import Antora from '../Antora/Antora';
import Nishat from '../Nishat/Nishat';
import Kamrul from '../Kamrul/Kamrul';
import Suraya from '../Suraya/Suraya';

import Home from '../Home/Home';
import Test from '../Test/Test';

function Navigation() {
    return (
        <Router>
            <div className="PageNavigation">
                <header className="PageNavigation-header">
                    <Navbar bg="light" expand="lg" fixed="top">
                        <Container>
                            <Navbar.Brand href="/">Team Radical</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link>
                                    <HashLink className="hash-link" to="/#fragment-home">Home</HashLink>
                                </Nav.Link>
                                <NavDropdown title="Members" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/Rakib_Ahmed">Rakib Ahmed</NavDropdown.Item>
                                    <NavDropdown.Item href="/Shahrier">Hasan Shahrier</NavDropdown.Item>
                                    <NavDropdown.Item href="/Kaniz_Fatema_Antora">Kaniz Fatema Antora</NavDropdown.Item>
                                    <NavDropdown.Item href="/Nishat_Tabassum_Mimi">Nishat Tabassum Mimi</NavDropdown.Item>
                                    <NavDropdown.Item href="/Kamrul_Hasan">Md. Kamrul Hasan</NavDropdown.Item>
                                    <NavDropdown.Item href="/Suraya_Binte_Khurshid">Suraya Binte Khurshid</NavDropdown.Item>
                                    {/* <NavDropdown.Item href="/test">Test</NavDropdown.Item> */}
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <HashLink className="hash-link" to="/#fragment-members">Members</HashLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link>
                                    <HashLink className="hash-link" to="/#fragment-projects">Projects</HashLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <HashLink className="hash-link" to="/#fragment-contact">Contact us</HashLink>
                                </Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                            <Button variant="primary" href="http://localhost:8888/">User Section</Button>{' '}
                        </Container>
                    </Navbar>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/Rakib_Ahmed">
                            <Rakib />
                        </Route>
                        <Route exact path="/Shahrier">
                            <Shahrier />
                        </Route>
                        <Route exact path="/Kaniz_Fatema_Antora">
                            <Antora />
                        </Route>
                        <Route exact path="/Nishat_Tabassum_Mimi">
                            <Nishat />
                        </Route>
                        <Route exact path="/Kamrul_Hasan">
                            <Kamrul />
                        </Route>
                        <Route exact path="/Suraya_Binte_Khurshid">
                            <Suraya />
                        </Route>
                        <Route exact path="/Test">
                            <Test />
                        </Route>
                        {/* <Route exact path="/SignIn">
                            <SignIn />
                        </Route> */}
                    </Switch>
                </header>
            </div>
        </Router>
    );
}

export default Navigation;