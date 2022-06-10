import { Card, ListGroupItem, ListGroup, Container, Row, Col, Button } from 'react-bootstrap';
import image from "../assets/thumbnail.png";
const Header = () => {
    return (
        <div className='HeaderBg'>
            <div >
                <Container>
                    <Row>
                        <Col xl={6}>
                            <img src={image} className="HeaderImageStyle" style={{ height: '75vh' }} />
                        </Col>
                        <Col xl={6}>
                            <div className="HeaderTextStyle text-white">
                                <h1>New Realese This Year</h1>
                                <span>get more discount up to 80%</span>
                                <div className='HeaderButtonStyle'>
                                    <Button variant="primary" href="#newReales" style={{
                                        fontWeight: 'bold', borderRadius: '12px', animation: 'animate__fadeIn',
                                        animationDuration: '3s'
                                    }}>Get More</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container >
            </div>
        </div>


    )
}

export default Header