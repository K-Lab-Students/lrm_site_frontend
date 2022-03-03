import { Col, Container, Table, Row } from 'react-bootstrap'

import Header from "../header/header.jsx"
import MainBody from '../mainBody/mainBody'

const Page = () => {
    return (
        <>
        <Header />
        <Container style={{marginTop: 10}}>
            <Row style={{marginTop: 10}}>
                <Col style={{marginTop: 10}}>
                    <MainBody  style={{marginTop: 10}}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Page