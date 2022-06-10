import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import React, { Component } from 'react'
import { API_URL } from '../utils/constant';
import { numbers } from '../utils/utils';
import axios from 'axios';

export default class Games extends Component {
    constructor(props) {
        super(props)
        this.state = {
            games: [],
        }
    }
    componentDidMount() {
        axios.get(API_URL + `games`)
            .then(res => {
                console.log(res.data)
                const games = res.data;
                this.setState({ games });
            }).catch(error => {
                console.log(error);
            })
    }
    render() {
        const { games } = this.state;
        return (
            <>

                <Col md={6} mt="2">
                    <h4 style={{ color: "grey" }}><b>Games</b></h4>
                    <hr />
                    <Row>
                        {games && games.map((game) => (
                            <Col>
                                <Card style={{ width: '18rem', marginTop: '10px' }}>
                                    <Card.Img variant="top" src={game.cover} />
                                    <Card.Body>
                                        <Card.Title>{game.name}</Card.Title>
                                        <Card.Text>
                                            <div>Rp.{numbers(game.price)}</div>
                                            <div>{game.genre.name}</div>
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>

            </>
        )
    }
}
