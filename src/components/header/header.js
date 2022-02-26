import './style.css'
import { Nav, Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <div className='Header'>
            <div className='HeaderContentDiv'>
                <Nav defaultActiveKey="/home" as="ul" className='Container'>
                    <Nav defaultActiveKey="/home" as="ul" className='Container'>
                        <Nav.Item as="li">
                            <Nav.Link href="/home">
                                <img src="https://img.icons8.com/office/30/000000/brain.png"/>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Nav defaultActiveKey="/home" as="ul" className='Container'>
                        <Nav.Item as="li">
                            <Nav.Link href="/home">
                                <span style={{color: 'white'}} className='ContainerItemNav'>Active</span>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-1">
                                <span style={{color: 'white'}} className='ContainerItemNav'>other</span>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-2">
                                <span style={{color: 'white'}} className='ContainerItemNav'>oky</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Nav defaultActiveKey="/home" as="ul" className='Container'>
                        <Nav.Item as="li">
                            <Nav.Link href="/home">
                                <span style={{color: 'white'}} className='ContainerItemNav'>Sing In</span>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-1">
                                <span style={{color: 'white'}} className='ContainerItemNav'>Sing Up</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                </Nav>
            </div>
        </div>
    )
}

export default Header