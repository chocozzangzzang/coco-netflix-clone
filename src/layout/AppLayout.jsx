import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Outlet, useNavigate } from "react-router-dom"
import "./AppLayout.style.css";
import { useState } from "react";

const AppLayout = () => {

    const [ keyWord, setKeyWord ] = useState("");
    const navigate = useNavigate();
    const searchByKeyword = async (e) => {
        e.preventDefault();
        // url을 바꾸기 //
        navigate(`/movies?keyword=${keyWord}`);
        setKeyWord("");
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img width={80} src="/netflix.png"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/movies">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyWord}
                onChange={(e) => setKeyWord(e.target.value)}
                />
            <Button variant="outline-danger" type="submit">Search</Button>
            </Form>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            <Outlet />
        </div>
        
    )
}

export default AppLayout