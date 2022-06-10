import { Card, ListGroupItem, ListGroup, Container, Row, Col, Button } from 'react-bootstrap';
import cov1 from "../assets/cov1.jpg";
import cov2 from "../assets/cov2.jpg";
import cov3 from "../assets/cov3.jpg";
const NewReal = () => {
    return (
        <>
            <br />
            <div className='TrendingText' id='newReales'>
                New Realese
            </div>
            <Container>
                <Row>
                    <Col sm={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={cov1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={cov2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={cov3} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container >
        </>
    )
}
export default NewReal;