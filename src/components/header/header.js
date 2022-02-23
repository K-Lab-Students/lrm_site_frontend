import './style.css'
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <Nav defaultActiveKey="/home" as="ul" className='Header'>
            <Nav.Item as="li">
                <Nav.Link href="/home"><span style={{color: 'white'}}>Active</span></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-1"><span style={{color: 'white'}}>other</span></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-2"><span style={{color: 'white'}}>oky</span></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Header