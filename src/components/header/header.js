import './style.css'
import { Nav, Navbar, Container, NavbarBrand, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const handlerSelect = (eventKey) => {
    // some todo
}

const Header = () => {
    return (
        <Navbar collapseOnSelect fixed='top' expand='md' bg='primary' variant='dark' style={{marginBottom:10}}>
            <NavbarBrand>
                <Nav.Link href='/'> 
                    <img src="https://img.icons8.com/office/30/000000/brain.png" />
                </Nav.Link>
            </NavbarBrand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Container>
                    <Nav className="justify-content-end" style={{ width: "100%" }} onSelect={handlerSelect}>
                        <Nav.Link  href='/' eventKey='1' style={{marginRight: 20}}> Главная страница </Nav.Link>
                        <NavDropdown title='Компетенции' id="nav-dropdown" style={{marginRight: 20}}>
                            <NavDropdown.Item eventKey="2.1">Программирование МК</NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.2">Нейронные сети</NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.3">Электроника</NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.4">Конструирование</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='/' eventKey='3' style={{marginRight: 20}}> О нас </Nav.Link>
                    </Nav>
                </Container>
                <Container>
                    <Nav className="justify-content-end" style={{ width: "100%" }} onSelect={handlerSelect}>
                        <Nav.Link href='/' eventKey='4'> Вход </Nav.Link>
                        <Nav.Link href='/' eventKey='5'> Регистрация </Nav.Link>
                    </Nav>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header