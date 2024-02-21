import { Button, Carousel, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Link to={'/'}>
                        <Navbar.Brand>
                            <img
                                src="https://asset.brandfetch.io/id4J58sqa_/id3secYmRE.svg?updated=1674733845448"
                                width="100"
                                height="45"
                                className="d-inline-block align-top"
                                alt="BMS Logo"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form className="d-flex my-1" style={{ width: '60%' }}>
                            <Form.Control
                                type="search"
                                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                        <Button variant="outline-primary"><i className="fa-solid fa-magnifying-glass pt-1" style={{ height: '21px' }}></i></Button>
                        <Nav className="ms-auto">
                            <NavDropdown title="Location" id="basic-nav-dropdown">
                                <NavDropdown.Item>Kochi</NavDropdown.Item>
                                <NavDropdown.Item>Mumbai</NavDropdown.Item>
                                <NavDropdown.Item>Bengaluru</NavDropdown.Item>
                                <NavDropdown.Item>Chennai</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Button className='btn btn-primary mx-2'>Sign in</Button>
                        <Button variant="outline-light"><i style={{ height: '22px' }} className="fa-solid fa-bars pt-1 text-dark"></i></Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            <div className="row shadow-sm">
                <div className="col-auto me-auto fw-bolder">
                    <Nav defaultActiveKey="" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link>Movies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link>Stream</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link>Events</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link>Plays</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link>Sports</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link>Activity</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="col-auto">
                    <Nav defaultActiveKey="" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link>ListYourShow</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link>Corporates</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link>Offers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link>Gift Cards</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
            <Carousel className='my-2'>
                <Carousel.Item>
                    <img className='object-fit-fill border rounded-4' src="https://assets-in.bmscdn.com/promotions/cms/creatives/1706382336630_web.jpg" alt="Fisrt Slide" width={'100%'} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='object-fit-fill border rounded-4' src="https://assets-in.bmscdn.com/promotions/cms/creatives/1708075654481_oscarmoviesweb.jpg" alt="Second Slide" width={'100%'} />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Header